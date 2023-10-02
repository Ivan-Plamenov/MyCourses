width = int(input())
lenght = int(input())
height = int(input())

total_volume = width * lenght * height
volume_is_over = False
command = input()

while command != "Done":
    current_boxes = int(command)
    total_volume -= current_boxes

    if total_volume < 0:
        volume_is_over = True
        break

    command = input()

if volume_is_over:
    print(f"No more free space! You need {abs(total_volume)} Cubic meters more.")

else:
    print(f"{total_volume} Cubic meters left.")
