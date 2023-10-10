from collections import deque


def drive_customers(customers, taxis):
    customers = deque(map(int, customers.split(", ")))
    taxis = list(map(int, taxis.split(", ")))

    total_time = 0

    while customers and taxis:
        current_customer = customers[0]
        current_taxi = taxis[-1]

        if current_taxi >= current_customer:
            total_time += current_customer
            customers.popleft()
            taxis.pop()
        else:
            taxis.pop()

    if not customers:
        return (
            True,
            f"All customers were driven to their destinations\nTotal time: {total_time} minutes",
        )
    else:
        return (
            False,
            f"Not all customers were driven to their destinations\nCustomers left: {', '.join(map(str, customers))}",
        )


# Get input
customers = input()
taxis = input()

# Drive the customers and get the result
success, message = drive_customers(customers, taxis)
print(message)
