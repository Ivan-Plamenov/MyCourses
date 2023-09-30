data = input().split(", ")
rows = int(data[0])
cols = int(data[1])

matrix = []
sum_nums = 0

for _ in range(rows):
    elemts = [int(el) for el in input().split(", ")]
    matrix.append(elemts)
    sum_nums += sum(elemts)

print(sum_nums)
print(matrix)