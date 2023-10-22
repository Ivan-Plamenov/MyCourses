# 100 / 100
n = int(input())
matrix = [list(input()) for _ in range(n)]
ship_position = [
    (row, col) for row in range(n) for col in range(n) if matrix[row][col] == "S"
][0]
total_fish = 0
ship_sunk = False  # Initialize this variable to check if the ship has sunk


def move_ship(direction, position):
    if direction == "up":
        return (position[0] - 1) % n, position[1]
    elif direction == "down":
        return (position[0] + 1) % n, position[1]
    elif direction == "left":
        return position[0], (position[1] - 1) % n
    elif direction == "right":
        return position[0], (position[1] + 1) % n


while True:
    command = input()
    if command == "collect the nets":
        break

    new_position = move_ship(command, ship_position)
    cell_value = matrix[new_position[0]][new_position[1]]

    if cell_value == "W":
        print(
            f"You fell into a whirlpool! The ship sank and you lost the fish you caught. Last coordinates of the ship: [{new_position[0]},{new_position[1]}]"
        )
        ship_sunk = True  # Set this to True if the ship sinks
        break  # End the loop instead of exit(), to allow further code execution
    elif cell_value.isdigit():
        total_fish += int(cell_value)
        matrix[new_position[0]][new_position[1]] = "-"

    matrix[ship_position[0]][ship_position[1]] = "-"
    ship_position = new_position
    matrix[ship_position[0]][ship_position[1]] = "S"

if not ship_sunk:
    if total_fish >= 20:
        print(f"Success! You managed to reach the quota!")
    else:
        print(
            f"You didn't catch enough fish and didn't reach the quota! You need {abs(20 - total_fish)} tons of fish more."
        )

    if total_fish > 0:
        print(f"Amount of fish caught: {total_fish} tons.")

    # Print the matrix if the ship didn't sink
    for row in matrix:
        print("".join(row))
