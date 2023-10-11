# 70 / 100
# Function to check if a position is valid on the chessboard
def is_valid_position(position):
    x, y = position
    return 0 <= x < 8 and 0 <= y < 8


# Function to check if a pawn can capture another pawn diagonally
def can_capture(pawn_position, opponent_position, direction):
    x1, y1 = pawn_position
    x2, y2 = opponent_position

    # Calculate the diagonal position
    diagonal_position = (x1 + direction, y1 + 1)

    # Check if the diagonal position is valid and contains an opponent's pawn
    if (
        is_valid_position(diagonal_position)
        and chessboard[diagonal_position[0]][diagonal_position[1]] == "b"
    ):
        return True

    diagonal_position = (x1 + direction, y1 - 1)

    # Check if the other diagonal position is valid and contains an opponent's pawn
    if (
        is_valid_position(diagonal_position)
        and chessboard[diagonal_position[0]][diagonal_position[1]] == "b"
    ):
        return True

    return False


# Function to convert coordinates to chess notation
def to_chess_notation(position):
    x, y = position
    column = chr(ord("a") + y)
    row = str(8 - x)
    return column + row


# Initialize the chessboard
chessboard = [input().split() for _ in range(8)]

# Initialize variables to track pawn positions
white_pawn_position = None
black_pawn_position = None

# Find the positions of white and black pawns
for i in range(8):
    for j in range(8):
        if chessboard[i][j] == "w":
            white_pawn_position = (i, j)
        elif chessboard[i][j] == "b":
            black_pawn_position = (i, j)

# Determine the direction of movement for white and black pawns
white_direction = -1  # White moves from the 1st rank to the 8th rank direction
black_direction = 1  # Black moves from the 8th rank to the 1st rank direction

# Check for pawn interactions and promotions
while True:
    # Check if white can capture black
    if can_capture(white_pawn_position, black_pawn_position, white_direction):
        print(
            f"Game over! White win, capture on {to_chess_notation(black_pawn_position)}."
        )
        break

    # Check if black can capture white
    if can_capture(black_pawn_position, white_pawn_position, black_direction):
        print(
            f"Game over! Black win, capture on {to_chess_notation(white_pawn_position)}."
        )
        break

    # Check if white pawn reached the last rank
    if white_pawn_position[0] == 0:
        print(
            f"Game over! White pawn is promoted to a queen at {to_chess_notation(white_pawn_position)}."
        )
        break

    # Check if black pawn reached the last rank
    if black_pawn_position[0] == 7:
        print(
            f"Game over! Black pawn is promoted to a queen at {to_chess_notation(black_pawn_position)}."
        )
        break

    # Move white pawn forward
    new_white_pawn_position = (
        white_pawn_position[0] + white_direction,
        white_pawn_position[1],
    )

    # Clear the previous white pawn position
    chessboard[white_pawn_position[0]][white_pawn_position[1]] = "-"

    # Update white pawn position
    white_pawn_position = new_white_pawn_position

    # Place the white pawn at its new position
    chessboard[white_pawn_position[0]][white_pawn_position[1]] = "w"

    # Move black pawn forward
    new_black_pawn_position = (
        black_pawn_position[0] + black_direction,
        black_pawn_position[1],
    )

    # Clear the previous black pawn position
    chessboard[black_pawn_position[0]][black_pawn_position[1]] = "-"

    # Update black pawn position
    black_pawn_position = new_black_pawn_position

    # Place the black pawn at its new position
    chessboard[black_pawn_position[0]][black_pawn_position[1]] = "b"
