number = int(input())

for current_number in range(1111, 9999 + 1):
    current_number_str = str(current_number)

    is_special = not any(
        int(current_digit) == 0 or number % int(current_digit) != 0
        for current_digit in current_number_str
    )
    if is_special:
        print(current_number_str, end=" ")
