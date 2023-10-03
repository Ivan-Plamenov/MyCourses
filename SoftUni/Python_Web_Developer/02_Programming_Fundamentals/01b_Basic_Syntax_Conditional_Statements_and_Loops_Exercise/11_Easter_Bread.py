budget = float(input())
flour_price = float(input())

eggs_price = flour_price * 0.75
milk_price = (flour_price * 1.25) / 4
one_bread_price = flour_price + eggs_price + milk_price
total_price = 0
total_breads = 0
eggs = 0

while total_price + one_bread_price <= budget:
    total_price += one_bread_price
    total_breads += 1
    eggs += 3
    if total_breads % 3 == 0:
        eggs -= total_breads - 2
money_left = budget - total_price
print(
    f"You made {total_breads} loaves of Easter bread! Now you have {eggs} eggs and {money_left:.2f}BGN left."
)
