def add_numbers(first_or_second, numbers):
    [first_or_second.add(number) for number in numbers]


def remove_numbers(first_or_second, numbers):
    [first_or_second.remove(number) for number in numbers if number in first_or_second]


def check_subset(first, second):
    print(first.issubset(second) or second.issubset(first))


first_sequence = set(map(int, input().split()))
second_sequence = set(map(int, input().split()))
lines_count = int(input())
for _ in range(lines_count):
    command_line = input()
    if command_line == "Check Subset":
        check_subset(first_sequence, second_sequence)
    else:
        command = command_line.split()
        values = [int(num) for num in command[2:]]
        if command[0] == "Add":
            if command[1] == "First":
                add_numbers(first_sequence, values)
            else:
                add_numbers(second_sequence, values)
        elif command[0] == "Remove":
            if command[1] == "First":
                remove_numbers(first_sequence, values)
            else:
                remove_numbers(second_sequence, values)

if first_sequence:
    sorted_first = [str(num) for num in sorted(first_sequence)]
    print(f"{', '.join(sorted_first)}")
if second_sequence:
    sorted_second = [str(num) for num in sorted(second_sequence)]
    print(f"{', '.join(sorted_second)}")