string = input()

counter = 0
output = ""

for index, value in enumerate(string):
    if index == len(string) - 1:
        output += string[counter:index].upper() * int(string[index : index + 1])
        counter += len(string[counter : index + 1])
    elif value.isdigit():
        if string[index + 1].isdigit():
            output += string[counter:index].upper() * int(string[index : index + 2])
            counter += len(string[counter : index + 2])
        elif not string[index + 1].isdigit():
            output += string[counter:index].upper() * int(string[index : index + 1])
            counter += len(string[counter : index + 1])

print(f"Unique symbols used: {len(set(output))}")
print(output)
