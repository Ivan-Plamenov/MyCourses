matrix_size = int(input())
matrix = []
primary_diagonal = []
secondary_diagonal = []

for _ in range(matrix_size):
    matrix.append([int(x) for x in input().split(", ")])

for idx in range(matrix_size):
    primary_diagonal.append(matrix[idx][idx])
    secondary_diagonal.append(matrix[idx][matrix_size - 1 - idx])

print(f"Primary diagonal: {', '.join([str(x) for x in primary_diagonal])}. Sum: {sum(primary_diagonal)}")
print(f"Secondary diagonal: {', '.join([str(x) for x in secondary_diagonal])}. Sum: {sum(secondary_diagonal)}")