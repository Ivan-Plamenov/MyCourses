seats = input().split(", ")
first_sequence = input().split(", ")
second_sequence = input().split(", ")

rotations = 0
matches = []

while rotations < 10 and len(matches) < 3:
    first_num = first_sequence.pop(0)
    second_num = second_sequence.pop()

    char_sum_1 = chr(int(first_num) + int(second_num))
    combined_seat_1 = first_num + char_sum_1
    combined_seat_2 = second_num + char_sum_1

    if combined_seat_1 in seats:
        matches.append(combined_seat_1)
        seats.remove(combined_seat_1)
    elif combined_seat_2 in seats:
        matches.append(combined_seat_2)
        seats.remove(combined_seat_2)
    else:
        first_sequence.append(first_num)
        second_sequence.insert(0, second_num)

    rotations += 1

print(f"Seat matches: {', '.join(matches)}")
print(f"Rotations count: {rotations}")
