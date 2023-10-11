# Function to handle rover movement within the matrix
def move_rover(row, col, direction):
    if direction == "up":
        row -= 1
    elif direction == "down":
        row += 1
    elif direction == "left":
        col -= 1
    elif direction == "right":
        col += 1

    # Wrap around if out of bounds
    if row < 0:
        row = 5
    elif row > 5:
        row = 0
    if col < 0:
        col = 5
    elif col > 5:
        col = 0

    return row, col


# Initialize the matrix and deposits
matrix = [list(input().split()) for _ in range(6)]
deposits = {"W": 0, "M": 0, "C": 0}
rover_broken = False

# Find the initial position of the rover
rover_row, rover_col = 0, 0
for i in range(6):
    for j in range(6):
        if matrix[i][j] == "E":
            rover_row, rover_col = i, j

# Parse and execute rover commands
commands = input().split(", ")
for command in commands:
    if not rover_broken:
        rover_row, rover_col = move_rover(rover_row, rover_col, command)
        cell_content = matrix[rover_row][rover_col]

        if cell_content == "R":
            print(f"Rover got broken at ({rover_row}, {rover_col})")
            rover_broken = True
        elif cell_content in deposits:
            deposits[cell_content] += 1
            print(f"{cell_content} deposit found at ({rover_row}, {rover_col})")

# Check if all deposits are found
if all(count > 0 for count in deposits.values()):
    print("Area suitable to start the colony.")
else:
    print("Area not suitable to start the colony.")
