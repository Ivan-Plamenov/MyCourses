from collections import deque

water_quantity = int(input())
water_queue = deque()

name = input()

while name != "Start":
    water_queue.append(name)
    name = input()

command = input()

while command != "End":
    data = command.split()
    if len(data) == 1:
        liters_to_give = int(data[0])
        person_name = water_queue.popleft()

        if liters_to_give <= water_quantity:
            water_quantity -= liters_to_give
            print(print(f"{person_name} got water"))
            
        else:
            print(print(f"{person_name} must wait"))

    else:
        liters_to_add = int(data[1])
        water_quantity += liters_to_add
    
    command = input()

print(f"{water_quantity} liters left")