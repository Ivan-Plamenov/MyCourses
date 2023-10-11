programmer_times = list(map(int, input().split()))
tasks = list(map(int, input().split()))

ducks = {
    "Darth Vader Ducky": 0,
    "Thor Ducky": 0,
    "Big Blue Rubber Ducky": 0,
    "Small Yellow Rubber Ducky": 0,
}

while programmer_times and tasks:
    time = programmer_times[0]
    task_count = tasks[-1]

    total_time = time * task_count

    if 0 <= total_time <= 60:
        ducks["Darth Vader Ducky"] += 1
        programmer_times.pop(0)
        tasks.pop()
    elif 61 <= total_time <= 120:
        ducks["Thor Ducky"] += 1
        programmer_times.pop(0)
        tasks.pop()
    elif 121 <= total_time <= 180:
        ducks["Big Blue Rubber Ducky"] += 1
        programmer_times.pop(0)
        tasks.pop()
    elif 181 <= total_time <= 240:
        ducks["Small Yellow Rubber Ducky"] += 1
        programmer_times.pop(0)
        tasks.pop()
    else:
        # if time is above the highest range
        tasks[-1] -= 2
        programmer_times.append(programmer_times.pop(0))

# Output the results
print("Congratulations, all tasks have been completed! Rubber ducks rewarded:")
for ducky, count in ducks.items():
    print(f"{ducky}: {count}")
