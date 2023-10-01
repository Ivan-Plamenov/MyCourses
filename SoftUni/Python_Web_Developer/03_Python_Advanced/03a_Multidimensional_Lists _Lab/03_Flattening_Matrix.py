rows = int(input())

matrix = []

for _ in range(rows):
    matrix += [int(el) for el in input().split(", ")]

print(matrix)
