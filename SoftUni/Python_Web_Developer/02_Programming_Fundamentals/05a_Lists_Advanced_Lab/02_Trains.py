wagons_number = int(input())
command = input()

list_wagons = [0] * wagons_number

while command != "End":
    command_as_list = command.split()
    if command_as_list[0] == "add":
        list_wagons[-1] += int(command_as_list[1])

    elif command_as_list[0] == "insert":
        list_wagons[int(command_as_list[1])] += int(command_as_list[-1])

    elif command_as_list[0] == "leave":
        list_wagons[int(command_as_list[1])] -= int(command_as_list[-1])
    command = input()

print(list_wagons)
