# 62 / 100
def move_player(field_size, player_pos, direction):
    new_pos = player_pos.copy()
    if direction == "up":
        new_pos[0] -= 1
    elif direction == "down":
        new_pos[0] += 1
    elif direction == "left":
        new_pos[1] -= 1
    elif direction == "right":
        new_pos[1] += 1

    # Check for wrapping around the field (going off one side and coming in the opposite side)
    new_pos[0] %= field_size
    new_pos[1] %= field_size
    return new_pos


field_size = int(input())
field = []
player_pos = []
path = []

# Initialize the field and player's position
for i in range(field_size):
    row = input().split()
    field.append(row)
    if "P" in row:
        player_pos = [i, row.index("P")]
        field[i][row.index("P")] = "0"  # Replacing 'P' with '0'

path.append(player_pos)  # Append player's starting position

coins_collected = 0

while True:
    try:
        command = input()
    except EOFError:
        break

    new_pos = move_player(field_size, player_pos, command)
    current_cell = field[new_pos[0]][new_pos[1]]

    if current_cell == "X":
        coins_collected = coins_collected // 2
        print(f"Game over! You've collected {coins_collected} coins.")
        break

    path.append(new_pos)  # Move this line here

    coins_collected += int(current_cell)
    # Clear the cell after collecting the coins
    field[new_pos[0]][new_pos[1]] = "0"
    player_pos = new_pos

    if coins_collected >= 100:
        print(f"You won! You've collected {coins_collected} coins.")
        break

print("Your path:")
for pos in path:
    print(f"[{pos[0]}, {pos[1]}]")
