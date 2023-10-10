def read_terrain(n):
    terrain = []
    snake_pos = None
    burrows = []
    for i in range(n):
        row = list(input())
        terrain.append(row)
        if "S" in row:
            snake_pos = (i, row.index("S"))
        if "B" in row:
            burrows.append((i, row.index("B")))
    return terrain, snake_pos, burrows


def move_snake(direction, position):
    if direction == "up":
        return (position[0] - 1, position[1])
    elif direction == "down":
        return (position[0] + 1, position[1])
    elif direction == "left":
        return (position[0], position[1] - 1)
    elif direction == "right":
        return (position[0], position[1] + 1)


def play_game(terrain, snake_pos, burrows):
    food_quantity = 0
    while True:
        direction = input()
        terrain[snake_pos[0]][snake_pos[1]] = "."
        snake_pos = move_snake(direction, snake_pos)

        # Check if snake goes out of the territory
        if (snake_pos[0] not in range(len(terrain))) or (
            snake_pos[1] not in range(len(terrain))
        ):
            print("Game over!")
            break

        # Check if the snake reaches food
        if terrain[snake_pos[0]][snake_pos[1]] == "*":
            food_quantity += 1
            if food_quantity == 10:
                print("You won! You fed the snake.")
                terrain[snake_pos[0]][snake_pos[1]] = "S"
                break

        # Check if the snake reaches a burrow
        elif terrain[snake_pos[0]][snake_pos[1]] == "B":
            terrain[snake_pos[0]][snake_pos[1]] = "."
            burrows.remove(snake_pos)
            snake_pos = burrows[0]
            burrows.clear()

        terrain[snake_pos[0]][snake_pos[1]] = "S"

    print(f"Food eaten: {food_quantity}")
    for row in terrain:
        print("".join(row))


n = int(input())
terrain, snake_pos, burrows = read_terrain(n)
play_game(terrain, snake_pos, burrows)
