products = input().split(": ")

total_products = {}

while "statistics" not in products:
    key = products[0]
    value = products[1]
    value = int(value)

    if key not in total_products:
        total_products[key] = value
    else:
        total_products[key] += value

    products = input().split(": ")

print("Products in stock:")
for product, quantity in total_products.items():
    print(f"- {product}: {quantity}")

print(f"Total Products: {len(total_products)}")
print(f"Total Quantity: {sum(total_products.values())}")
