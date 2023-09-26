customer_queue = []

while True:
    command = input()
    if command == 'Paid':
        while len(customer_queue) > 0:
            print(customer_queue.pop(0))
    elif command == 'End':
        break
    else:
        customer_queue.append(command)

print(f"{len(customer_queue)} people remaining.")