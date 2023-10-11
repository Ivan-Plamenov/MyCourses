def stock_availability(inventory, operation, *args):
    if operation == "delivery":
        inventory.extend(args)

    elif operation == "sell":
        if not args:  # If there are no other parameters
            inventory.pop(0)
        else:
            for arg in args:
                if isinstance(arg, int):  # If the argument is a number
                    for _ in range(arg):
                        if inventory:
                            inventory.pop(0)
                elif isinstance(arg, str):  # If the argument is a string
                    inventory = [box for box in inventory if box != arg]

    return inventory
