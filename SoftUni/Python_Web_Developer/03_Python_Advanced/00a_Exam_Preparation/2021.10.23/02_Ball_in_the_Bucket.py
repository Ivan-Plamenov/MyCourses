def bucket_game(matrix, throws):
    points = 0
    hit_buckets = set()

    for throw in throws:
        row, col = [int(coord) for coord in throw[1:-1].split(", ")]

        # Check if the coordinates are within the matrix
        if 0 <= row < 6 and 0 <= col < 6:
            if matrix[row][col] == "B":
                if (row, col) not in hit_buckets:
                    hit_buckets.add((row, col))
                    for r in range(6):
                        if matrix[r][col] != "B":
                            points += int(matrix[r][col])

    if 100 <= points <= 199:
        prize = "Football"
    elif 200 <= points <= 299:
        prize = "Teddy Bear"
    elif points >= 300:
        prize = "Lego Construction Set"
    else:
        return f"Sorry! You need {100 - points} points more to win a prize."

    return f"Good job! You scored {points} points, and you've won {prize}."


# Get input from the console
matrix = [input().split() for _ in range(6)]
throws = [input() for _ in range(3)]

print(bucket_game(matrix, throws))
