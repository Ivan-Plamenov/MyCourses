def shop_from_grocery_list(budget, grocery_list, *products_data):
    purchased_products = []

    for product_name, price in products_data:
        if (
            product_name in grocery_list
            and product_name not in purchased_products
            and budget >= price
        ):
            budget -= price
            purchased_products.append(product_name)

    missing_products = set(grocery_list) - set(purchased_products)

    if missing_products:
        return f'You did not buy all the products. Missing products: {", ".join(sorted(missing_products))}.'
    else:
        return f"Shopping is successful. Remaining budget: {budget:.2f}."
