current_record = float(input())
distance = float(input())
time_per_m = float(input())
delay = distance // 15 * 12.5

new_record = distance * time_per_m + delay

if new_record < current_record :
    print(f"Yes, he succeeded! The new world record is {new_record:.2f} seconds.")

else:
    print(f"No, he failed! He was {new_record-current_record:.2f} seconds slower.")