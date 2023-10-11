def complete_pizza_orders(pizza_orders: list, employee_capacities: list) -> None:
    # Remove invalid orders
    pizza_orders = [order for order in pizza_orders if 0 < order <= 10]

    # Sort the orders in their input order (since we need to start from the first order)
    total_pizzas_made = 0

    while pizza_orders and employee_capacities:
        order = pizza_orders[0]
        employee = employee_capacities.pop()  # Get the last employee

        # Deduct the order from the employee's capacity
        if order <= employee:
            total_pizzas_made += order
            pizza_orders.pop(0)
        else:
            total_pizzas_made += employee
            pizza_orders[0] -= employee

    if not pizza_orders:
        print("All orders are successfully completed!")
        print(f"Total pizzas made: {total_pizzas_made}")
        print(f"Employees: {', '.join(map(str, employee_capacities))}")
    else:
        print("Not all orders are completed.")
        print(f"Orders left: {', '.join(map(str, pizza_orders))}")


# Read inputs
pizza_orders_input = list(map(int, input().split(", ")))
employee_capacities_input = list(map(int, input().split(", ")))
complete_pizza_orders(pizza_orders_input, employee_capacities_input)
