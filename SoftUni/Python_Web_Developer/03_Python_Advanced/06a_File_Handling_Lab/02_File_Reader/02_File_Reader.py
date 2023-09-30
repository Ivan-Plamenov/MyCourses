sum_numbers = 0

with open("numbers.txt") as file:
    for line in file:
        sum_numbers += int(line)

print(sum_numbers)