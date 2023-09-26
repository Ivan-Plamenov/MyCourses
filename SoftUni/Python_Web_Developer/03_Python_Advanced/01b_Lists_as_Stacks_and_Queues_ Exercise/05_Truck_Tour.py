from collections import deque

pumps_count = int(input())
pumps = deque()

for pump in range(pumps_count):
    pump_info = input().split()
    pumps.append([pump, int(pump_info[0]), int(pump_info[1])])

circle_is_complete = False
for pump_index in range(pumps_count):
    fuel = 0
    for stops in pumps:
        inserted_fuel = stops[1]
        distance_to_next_pump = stops[2]
        fuel += inserted_fuel
        if distance_to_next_pump > fuel:
            circle_is_complete = False
            break
        else:
            fuel -= distance_to_next_pump
        circle_is_complete = True
    if circle_is_complete:
        print(pump_index)
        break
    else:
        pumps.append(pumps.popleft())