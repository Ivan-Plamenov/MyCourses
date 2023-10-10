def find_king(board):
    for i in range(8):
        for j in range(8):
            if board[i][j] == "K":
                return i, j


def can_capture_king(board, ki, kj, di, dj):
    i, j = ki + di, kj + dj
    while 0 <= i < 8 and 0 <= j < 8:
        if board[i][j] == "Q":
            return True
        if board[i][j] == "K" or board[i][j] == "Q":
            break
        i += di
        j += dj
    return False


def queens_capturing_king(board):
    ki, kj = find_king(board)
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (-1, -1), (1, -1), (-1, 1)]
    result = []

    for di, dj in directions:
        if can_capture_king(board, ki, kj, di, dj):
            i, j = ki + di, kj + dj
            while 0 <= i < 8 and 0 <= j < 8:
                if board[i][j] == "Q":
                    result.append([i, j])
                    break
                i += di
                j += dj

    return result


# Input the board
board = [input().split() for _ in range(8)]

# Get the positions of the queens that can capture the king
capturing_queens = queens_capturing_king(board)

# Print the result
if capturing_queens:
    for queen in capturing_queens:
        print(queen)
else:
    print("The king is safe!")
