numbers_as_string = input()

list_numbers = numbers_as_string.split(", ")

numbers_as_int = [int(number) for number in list_numbers]

even_index = [
    index for index in range(len(numbers_as_int)) if numbers_as_int[index] % 2 == 0
]
print(even_index)
