budget = float(input())
cast_number = int(input())
cast_clothing_price = float(input())
set_price = 0.1 * budget
clothing_price = cast_number * cast_clothing_price

if cast_number >150:
    clothing_price *= 0.9

total_cost = set_price + clothing_price
difference = abs(total_cost - budget)

if budget < total_cost:
    print(f"Not enough money!")
    print(f"Wingard needs {difference:.2f} leva more.")

else:
    print(f"Action!")
    print(f"Wingard starts filming with {difference:.2f} leva left.")
