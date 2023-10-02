hour_exam = int(input())
minutes_exam = int(input())
hour_arrive = int(input())
minutes_arrive = int(input())

exam_time = hour_exam * 60 + minutes_exam
arrive_time = hour_arrive * 60 + minutes_arrive

earlier_exam = exam_time - 30

if earlier_exam <= arrive_time <= exam_time:
    print("On time")
elif arrive_time < earlier_exam:
    print("Early")
else:
    print("Late")

earlier_with_60 = exam_time - 60
later_with_60 = exam_time + 60
difference_hours = (hour_exam - hour_arrive) * 60  # converted hours to minutes
difference_minutes = minutes_exam - minutes_arrive
delta_time = abs(
    difference_hours + difference_minutes
)  # created a variable to capture the difference calculated in minutes as an absolute value

# notice below the print statements have been changed to reflect the difference in hours and minutes
# delta_time // 60 gives us the actual hour
# delta_time % 60 gives us the remaining minutes

if exam_time > arrive_time > earlier_with_60:
    before_start = exam_time - arrive_time
    print(f"{before_start} minutes before the start")
elif arrive_time <= earlier_with_60:
    print(f"{delta_time // 60 }:{(delta_time % 60):02d} hours before the start")
elif exam_time < arrive_time < later_with_60:
    print(f"{delta_time % 60} minutes after the start")
else:
    print(f"{delta_time // 60 }:{(delta_time % 60):02d} hours after the start")
