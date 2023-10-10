def list_manipulator(numbers, action, position, *args):
    if action == "add":
        if position == "beginning":
            new_numbers = list(args) + numbers
        elif position == "end":
            new_numbers = numbers + list(args)
    elif action == "remove":
        if position == "beginning":
            if args:
                remove_count = args[0]
                new_numbers = numbers[remove_count:]
            else:
                new_numbers = numbers[1:]
        elif position == "end":
            if args:
                remove_count = args[0]
                new_numbers = numbers[:-remove_count]
            else:
                new_numbers = numbers[:-1]
    return new_numbers
