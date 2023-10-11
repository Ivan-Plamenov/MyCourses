def naughty_or_nice_list(santa_list, *args, **kwargs):
    # Initialize the lists
    naughty = []
    nice = []
    not_found = []

    # Process the commands from args
    for command in args:
        num, action = command.split("-")
        num = int(num)
        # Find a kid with the given number and only one occurrence
        matches = [kid for kid in santa_list if kid[0] == num]
        if len(matches) == 1:
            if action == "Naughty":
                naughty.append(matches[0][1])
            elif action == "Nice":
                nice.append(matches[0][1])
            santa_list.remove(matches[0])

    # Process the commands from kwargs
    for name, action in kwargs.items():
        matches = [kid for kid in santa_list if kid[1] == name]
        if len(matches) == 1:
            if action == "Naughty":
                naughty.append(name)
            elif action == "Nice":
                nice.append(name)
            santa_list.remove(matches[0])

    # Add the remaining kids to the not_found list
    for _, name in santa_list:
        not_found.append(name)

    # Create the result string
    result = []
    if nice:
        result.append(f"Nice: {', '.join(nice)}")
    if naughty:
        result.append(f"Naughty: {', '.join(naughty)}")
    if not_found:
        result.append(f"Not found: {', '.join(not_found)}")

    return "\n".join(result)
