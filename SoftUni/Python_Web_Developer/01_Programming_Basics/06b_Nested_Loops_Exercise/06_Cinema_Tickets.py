movie_name = input()
total_tickets = 1
students = 0
standard = 0
kid = 0

while movie_name != "Finish":
    seats_available = int(input())
    seats_taken = 0
    ticket_type = input()

    while ticket_type != "End":
        if ticket_type == "kid":
            kid += 1
        elif ticket_type == "student":
            students += 1
        elif ticket_type == "standard":
            standard += 1
        seats_taken += 1
        total_tickets += 1
        if seats_taken == seats_available:
            break

        ticket_type = input()
    fillrate = seats_taken / seats_available * 100

    print(f"{movie_name} - {fillrate:.2f}% full.")

    movie_name = input()
total_tickets -= 1
proc_student = students / total_tickets * 100
proc_standard = standard / total_tickets * 100
proc_kids = kid / total_tickets * 100
print(f"Total tickets: {total_tickets}")
print(f"{proc_student:.2f}% student tickets.")
print(f"{proc_standard:.2f}% standard tickets.")
print(f"{proc_kids:.2f}% kids tickets.")
