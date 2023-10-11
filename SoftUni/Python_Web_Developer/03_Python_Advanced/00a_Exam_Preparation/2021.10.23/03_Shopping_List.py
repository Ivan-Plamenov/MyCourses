def shopping_list(budget, **products):
    # Check the initial budget
    if budget < 100:
        return "You do not have enough budget."

    # Define the shopping basket
    basket = []

    # Shop for products as long as there's money left and space in the basket
    for product, details in products.items():
        product_price, quantity = details
        total_price = product_price * quantity

        # Check if we can afford the product and if there's space in the basket
        if total_price <= budget and len(basket) < 5:
            basket.append(f"You bought {product} for {total_price:.2f} leva.")
            budget -= total_price

    return "\n".join(basket)
