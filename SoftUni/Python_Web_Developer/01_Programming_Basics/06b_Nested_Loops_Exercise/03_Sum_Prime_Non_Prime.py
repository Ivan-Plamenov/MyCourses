sum_prime = 0
sum_non_prime = 0

input_line = input()

while input_line != "stop":
    concurrent_number = int(input_line)
    if concurrent_number < 0:
        print("Number is negative.")

    else:
        is_prime = all(
            concurrent_number % number != 0 for number in range(2, concurrent_number)
        )
        if is_prime:
            sum_prime += concurrent_number

        else:
            sum_non_prime += concurrent_number

    input_line = input()

print(f"Sum of all prime numbers is: {sum_prime}")
print(f"Sum of all non prime numbers is: {sum_non_prime}")
