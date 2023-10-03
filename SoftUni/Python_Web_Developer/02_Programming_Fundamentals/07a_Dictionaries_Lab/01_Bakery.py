products = input().split()

dict = {products[key]: int(products[key + 1]) for key in range(0, len(products), 2)}
print(dict)
