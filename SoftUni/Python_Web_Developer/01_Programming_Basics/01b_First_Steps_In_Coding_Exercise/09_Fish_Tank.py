lenght_cm = int(input())
wide_cm = int(input())
height_cm = int(input())
percentage = float(input())

lenght_dm = 0.1 * lenght_cm
wide_dm = 0.1 * wide_cm
height_dm = 0.1 * height_cm
percentage_s = 0.01 * percentage

volume_tank = lenght_dm * wide_dm * height_dm
volume_watter = volume_tank - percentage_s * volume_tank

print(volume_watter)