num_a = int(input())
num_b = int(input())
operator = input()
sum = 0
even_or_odd = ""


if operator == "+":
    sum = num_a + num_b
    even_or_odd = "odd" if sum % 2 != 0 else "even"
    print(f"{num_a} {operator} {num_b} = {sum} - {even_or_odd}")
if operator == "-":
    sum = num_a - num_b
    even_or_odd = "odd" if sum % 2 != 0 else "even"
    print(f"{num_a} {operator} {num_b} = {sum} - {even_or_odd}")
if operator == "*":
    sum = num_a * num_b
    even_or_odd = "odd" if sum % 2 != 0 else "even"
    print(f"{num_a} {operator} {num_b} = {sum} - {even_or_odd}")
if operator == "/":
    if num_b == 0:
        print(f"Cannot divide {num_a} by zero")

    else:
        sum = num_a / num_b
        print(f"{num_a} / {num_b} = {sum:.2f}")

if operator == "%":
    if num_b == 0:
        print(f"Cannot divide {num_a} by zero")

    else:
        sum = num_a % num_b
        print(f"{num_a} % {num_b} = {sum}")
