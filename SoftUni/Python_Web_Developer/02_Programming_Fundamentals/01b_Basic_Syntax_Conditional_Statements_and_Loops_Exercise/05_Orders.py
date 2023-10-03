num_orders = int(input())

price_capsule = 0
days = 0
count_capsule = 0
total_price = 0

for _ in range(1, num_orders + 1):
    price_capsule = float(input())
    days = int(input())
    count_capsule = int(input())

    if 0.01 <= price_capsule <= 100 and 1 <= days <= 31 and 1 <= count_capsule <= 2000:
        total_price += price_capsule * days * count_capsule
        print(
            f"The price for the coffee is: ${(price_capsule * days * count_capsule):.2f}"
        )
print(f"Total: ${total_price:.2f}")
