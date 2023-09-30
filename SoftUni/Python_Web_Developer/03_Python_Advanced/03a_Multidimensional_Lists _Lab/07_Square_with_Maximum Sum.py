data = input().split(", ")
rows = int(data[0])
cols = int(data[1])

matrix = []

for row in range(rows):
    elements = [int(el) for el in input().split(", ")]
    matrix.append(elements)

max_sum = float('-inf')
max_sum_sub_matrix = []

for row_index in range(rows-1):
    for col_index in range(cols-1):
        current_element = matrix[row_index][col_index]
        next_element = matrix[row_index][col_index + 1]
        below_element = matrix[row_index + 1][col_index]
        diagonal_element = matrix[row_index + 1][col_index + 1]
        sum_elements = current_element + next_element + below_element + diagonal_element

        if max_sum < sum_elements:
            max_sum = sum_elements
            max_sum_sub_matrix = [[current_element,next_element],[below_element,diagonal_element]]

print(*max_sum_sub_matrix[0])
print(*max_sum_sub_matrix[1])
print(max_sum)