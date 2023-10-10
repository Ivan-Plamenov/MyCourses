def move_player(matrix, pos, direction):
    x, y = pos
    if direction == "up":
        x -= 1
    elif direction == "down":
        x += 1
    elif direction == "left":
        y -= 1
    elif direction == "right":
        y += 1
    return x, y


def is_valid(x, y, n):
    return 0 <= x < n and 0 <= y < n


initial_string = input().strip()
n = int(input())
matrix = [list(input().strip()) for _ in range(n)]

# Find player's initial position
player_pos = [(i, j) for i in range(n) for j in range(n) if matrix[i][j] == "P"][0]

m = int(input())
for _ in range(m):
    command = input().strip()
    new_x, new_y = move_player(matrix, player_pos, command)

    if is_valid(new_x, new_y, n):
        if matrix[new_x][new_y] != "-":
            initial_string += matrix[new_x][new_y]
            matrix[new_x][new_y] = "-"
        matrix[player_pos[0]][player_pos[1]] = "-"
        matrix[new_x][new_y] = "P"
        player_pos = (new_x, new_y)
    else:
        if initial_string:
            initial_string = initial_string[:-1]

print(initial_string)
for row in matrix:
    print("".join(row))
