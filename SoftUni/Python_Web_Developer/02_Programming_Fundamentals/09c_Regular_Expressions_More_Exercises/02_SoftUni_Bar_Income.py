import re

re_customer = r"%([A-Z][a-z]+)%"
re_product = r"<(\w+)>"
re_count = r"\|(\d+)\|"
re_price = r"(\d+\.?\d+?)\$"

data = input()
total = 0

while data != "end of shift":
    customer = re.findall(re_customer, data)
    product = re.findall(re_product, data)
    count = re.findall(re_count, data)
    price = re.findall(re_price, data)
    if len(customer) != 0 and len(product) != 0 and len(count) != 0 and len(price) != 0:
        print(
            f"{customer[0]}: {product[0]} - " f"{int(count[0]) * float(price[0]):.2f}"
        )
        total += int(count[0]) * float(price[0])
    data = input()

print(f"Total income: {total:.2f}")
