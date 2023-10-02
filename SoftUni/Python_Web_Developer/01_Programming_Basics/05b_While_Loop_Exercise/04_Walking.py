steps_goal = 10000

command = input()
steps = 0

while steps < steps_goal:
    if command == "Going home":
        command = int(input())
        steps += command
        break

    command = int(command)

    steps += command

    if steps >= steps_goal:
        break

    command = input()

difference = abs(steps - steps_goal)

if steps >= steps_goal:
    print("Goal reached! Good job!")
    print(f"{difference} steps over the goal!")
else:
    print(f"{difference} more steps to reach goal.")
