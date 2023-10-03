products = input().split()
products = {}

for index in range(0, len(products), 2):
    key = products[index]
    value = products[index + 1]
    value = int(value)
    products[key] = value

searched_products = input().split()

for each_product in searched_products:
    if each_product in products:
        print(f"We have {products[each_product]} of {each_product} left")
    else:
        print(f"Sorry, we don't have {each_product}")
