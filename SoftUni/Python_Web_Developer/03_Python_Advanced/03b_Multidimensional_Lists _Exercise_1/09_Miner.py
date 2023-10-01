def is_valid(row, col, size):
    return 0 <= row < size and 0 <= col < size


size = int(input())
commands = input().split()

matrix = []
current_row, current_col = 0, 0
coal = 0
game_over = False

for row in range(size):
    matrix.append(input().split())
    for col in range(size):
        if matrix[row][col] == "s":
            current_row, current_col = row, col
        elif matrix[row][col] == "c":
            coal += 1

for command in commands:
    if command == "up":
        if is_valid(current_row - 1, current_col, size):
            current_row -= 1
    elif command == "down":
        if is_valid(current_row + 1, current_col, size):
            current_row += 1
    elif command == "left":
        if is_valid(current_row, current_col - 1, size):
            current_col -= 1
    elif command == "right":
        if is_valid(current_row, current_col + 1, size):
            current_col += 1

    if matrix[current_row][current_col] == "e":
        print(f"Game over! ({current_row}, {current_col})")
        game_over = True
        break
    elif matrix[current_row][current_col] == "c":
        coal -= 1
        matrix[current_row][current_col] = "*"
        if coal == 0:
            print(f"You collected all coal! ({current_row}, {current_col})")
            game_over = True
            break

if not game_over:
    print(f"{coal} pieces of coal left. ({current_row}, {current_col})")
