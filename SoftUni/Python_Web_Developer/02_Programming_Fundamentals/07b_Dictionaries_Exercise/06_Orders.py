products = {}
products_last_price = {}
products_last_quantity = {}
while True:
    info = input().split(" ")
    name = info[0]
    if name == "buy":
        break
    price = info[1]
    quantity = info[2]
    final_price = (
        (float(price) * (float(quantity) + products_last_quantity.get(name, 0)))
        - products.get(name, 0)
        if products.get(name, float(price)) != float(price)
        else float(price) * float(quantity)
    )
    products_last_price[name] = float(price)
    if name in products_last_quantity:
        products_last_quantity[name] += float(quantity)
    else:
        products_last_quantity[name] = float(quantity)

    if name in products:
        products[name] += final_price

    else:
        products[name] = final_price
for k, v in products.items():
    print(f"{k} -> {v:.2f}")
