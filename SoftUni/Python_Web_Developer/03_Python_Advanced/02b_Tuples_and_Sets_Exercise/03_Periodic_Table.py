lines_count = int(input())
unique_elements = set()
for _ in range(lines_count):
    current_elements = input().split()
    for element in current_elements:
        unique_elements.add(element)
[print(item) for item in unique_elements]
