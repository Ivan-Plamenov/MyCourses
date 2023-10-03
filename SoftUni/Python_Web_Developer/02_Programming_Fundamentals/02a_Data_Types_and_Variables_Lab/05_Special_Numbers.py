boundary = int(input())

for number in range(1, boundary + 1):
    numstring = str(number)
    is_special = False
    aggregate = sum(int(digit) for digit in numstring)
    if aggregate in (5, 7, 11):
        is_special = True
    print(f"{number} -> {is_special}")
