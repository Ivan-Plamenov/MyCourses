data = {}

while True:
    command = input()
    if ":" in command:
        tokens = command.split(":")
        name = tokens[0]
        identification = int(tokens[1])
        course = tokens[2]
        if course in data:
            data[course] += [[name, identification]]
        else:
            data[course] = [[name, identification]]
    else:
        course = command.replace("_", " ")
        break

for i in data[course]:
    name = i[0]
    identification = i[1]
    print(f"{name} - {identification}")
