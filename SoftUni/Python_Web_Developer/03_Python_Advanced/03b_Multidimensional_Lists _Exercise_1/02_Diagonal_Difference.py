matrix_size = int(input())
matrix = []
primary_diagonal = []
secondary_diagonal = []

for _ in range(matrix_size):
    matrix.append([int(x) for x in input().split()])

for idx in range(matrix_size):
    primary_diagonal.append(matrix[idx][idx])
    secondary_diagonal.append(matrix[idx][matrix_size - 1 - idx])

sum_diagonals = abs(sum(primary_diagonal) - sum(secondary_diagonal))
print(sum_diagonals)