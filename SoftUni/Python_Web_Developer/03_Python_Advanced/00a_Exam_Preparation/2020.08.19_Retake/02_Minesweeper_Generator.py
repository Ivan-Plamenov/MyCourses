def is_valid_position(matrix, row, col):
    return 0 <= row < len(matrix) and 0 <= col < len(matrix[0])


def place_bombs(matrix, bombs):
    for bomb in bombs:
        (row, col) = bomb
        matrix[row][col] = "*"


def calculate_numbers(matrix, row, col):
    directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]

    count = 0
    for direction in directions:
        next_row, next_col = row + direction[0], col + direction[1]

        if (
            is_valid_position(matrix, next_row, next_col)
            and matrix[next_row][next_col] == "*"
        ):
            count += 1

    return count


def create_mines_field(n, bombs):
    field = [[0] * n for _ in range(n)]
    place_bombs(field, bombs)
    for row in range(n):
        for col in range(n):
            if field[row][col] != "*":
                field[row][col] = calculate_numbers(field, row, col)
    return field


n = int(input())
num_bombs = int(input())
bombs = []

for _ in range(num_bombs):
    bomb_position = input().strip()[1:-1].split(", ")
    x, y = int(bomb_position[0]), int(bomb_position[1])
    bombs.append((x, y))

field = create_mines_field(n, bombs)

for row in field:
    print(" ".join(map(str, row)))
