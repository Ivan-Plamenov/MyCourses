string_of_happiness = input()
happiness_improvement_factor = int(input())

list_of_happiness_str = string_of_happiness.split()

happiness_int = [int(element) for element in list_of_happiness_str]

after_multiply_factor = [
    number * happiness_improvement_factor for number in happiness_int
]
average_happiness = sum(after_multiply_factor) / len(after_multiply_factor)

filter_list = [num for num in after_multiply_factor if num >= average_happiness]


if len(filter_list) >= len(after_multiply_factor) / 2:
    print(f"Score: {len(filter_list)}/{len(happiness_int)}. Employees are happy!")

else:
    print(f"Score: {len(filter_list)}/{len(happiness_int)}. Employees are not happy!")
