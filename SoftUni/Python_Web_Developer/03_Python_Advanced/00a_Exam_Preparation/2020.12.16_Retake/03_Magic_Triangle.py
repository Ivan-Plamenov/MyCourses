def get_magic_triangle(n):
    triangle = [[1], [1, 1]]

    while len(triangle) < n:
        prev_row = triangle[-1]
        new_row = [prev_row[0]]

        for i in range(len(prev_row) - 1):
            new_row.append(prev_row[i] + prev_row[i + 1])

        new_row.append(prev_row[-1])
        triangle.append(new_row)

    return triangle
