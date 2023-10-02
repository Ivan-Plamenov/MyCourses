day = str(input())
is_working_day = day in {
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
}
is_weekend = day in {"Saturday", "Sunday"}

if is_working_day:
    print("Working day")

elif is_weekend:
    print("Weekend")

else:
    print("Error")
