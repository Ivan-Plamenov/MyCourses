import math

num_cups = int(input())
rank_points = int(input())
win_count = 0
points_won = 0

for _ in range(num_cups):
    final_standing = input()
    if final_standing == "F":
        points_won += 1200

    elif final_standing == "SF":
        points_won += 720

    elif final_standing == "W":
        win_count += 1
        points_won += 2000

final_points = rank_points + points_won
average_points = points_won / num_cups
win_per = win_count / num_cups * 100

print(f"Final points: {final_points}")
print(f"Average points: {math.floor(average_points)}")
print(f"{win_per:.2f}%")
