race_steps = input().split()

race_steps = [int(i) for i in race_steps]
finish_line = len(race_steps) // 2
left_car_total_time = 0
right_car_total_time = 0

left_car_times = race_steps[:finish_line]
right_car_times = race_steps[-1:finish_line:-1]

for time in left_car_times:
    if time == 0:
        left_car_total_time *= 0.8
    else:
        left_car_total_time += time

for time in right_car_times:
    if time == 0:
        right_car_total_time *= 0.8
    else:
        right_car_total_time += time


if left_car_total_time < right_car_total_time:
    winner = "left"
    time = left_car_total_time
else:
    winner = "right"
    time = right_car_total_time

print(f"The winner is {winner} with total time: {time:.1f}")
