numbers = list(map(int, input().split(",")))

for num in range(len(numbers)):
    if numbers[num] == 0:
        numbers.append(numbers.pop(numbers.index(0)))

print(numbers)
