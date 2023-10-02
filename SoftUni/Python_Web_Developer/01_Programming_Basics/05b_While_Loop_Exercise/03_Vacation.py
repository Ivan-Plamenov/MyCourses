money_needed = float(input())
money_in_hand = float(input())
spending_count = 0
total_days = 0
spending_to_much = False

while money_in_hand < money_needed:
    if spending_count >= 5:
        spending_to_much = True
        break

    action = input()
    current_sum = float(input())
    total_days += 1

    if action == "save":
        money_in_hand += current_sum
        spending_count = 0
    elif action == "spend":
        spending_count += 1
        money_in_hand -= current_sum

    money_in_hand = max(money_in_hand, 0)
if spending_to_much:
    print("You can't save the money.")
    print(f"{total_days}")

else:
    print(f"You saved the money for {total_days} days.")
