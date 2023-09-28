time_first = int(input())
time_second = int(input())
time_third = int(input())

sum = time_first + time_second + time_third
minutes = sum // 60
seconds = sum % 60

print(f"{minutes}:{seconds:02d}")