from collections import deque


def time_to_seconds(time):
    hours, minutes, seconds = list(map(int, time.split(":")))
    return hours * 60 * 60 + minutes * 60 + seconds


def formatted_time(seconds):
    hours = seconds // (60 * 60) % 24
    minutes = (seconds % (60 * 60)) // 60
    seconds = (seconds % (60 * 60)) % 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"


robots_info = input().split(";")
robots = []

for item in robots_info:
    name, process_time = item.split("-")
    robots.append([name, int(process_time), int(process_time), "free"])

time = input()
time_in_seconds = time_to_seconds(time)
products_queue = deque()
while True:
    product = input()
    if product == "End":
        break
    products_queue.append(product)

while products_queue:
    time_in_seconds += 1
    current_product = products_queue.popleft()
    for robot in robots:
        robot_name = robot[0]
        status = robot[3]
        if status == "free":
            robot[3] = "busy"
            print(f"{robot_name} - {current_product} [{formatted_time(time_in_seconds)}]")
            break
    else:
        products_queue.append(current_product)
    for robot in robots:
        if robot[3] == "busy":
            robot[2] -= 1
        if robot[2] <= 0:
            robot[3] = "free"
            robot[2] = robot[1]
