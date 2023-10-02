age = int(input())
wm_price = float(input())
toy_price = int(input())

total_money = 0
total_toys = 0
bday_money = 0
odd_count = 0

for current_age in range(1, age + 1):
    if current_age % 2 != 0:
        total_toys += 1

    else:
        odd_count += 1
        bday_money += 10 * odd_count


total_money = bday_money - odd_count * 1 + total_toys * toy_price
diff = abs(wm_price - total_money)

if total_money >= wm_price:
    print(f"Yes! {diff:.2f}")

else:
    print(f"No! {diff:.2f}")
