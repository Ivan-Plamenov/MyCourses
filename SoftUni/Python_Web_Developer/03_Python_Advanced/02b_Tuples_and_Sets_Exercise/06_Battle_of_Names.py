lines_count = int(input())
row_count = 0
odd_numbers = set()
even_numbers = set()
for _ in range(lines_count):
    row_count += 1
    name = [ord(symbol) for symbol in input()]
    ascii_value = sum(name)
    integer_divide = ascii_value // row_count
    if integer_divide % 2 == 0:
        even_numbers.add(integer_divide)
    else:
        odd_numbers.add(integer_divide)
if sum(odd_numbers) == sum(even_numbers):
    result = [str(num) for num in odd_numbers.union(even_numbers)]
elif sum(odd_numbers) > sum(even_numbers):
    result = [str(num) for num in odd_numbers.difference(even_numbers)]
else:
    result = [str(num) for num in odd_numbers.symmetric_difference(even_numbers)]
print(", ".join(result))
