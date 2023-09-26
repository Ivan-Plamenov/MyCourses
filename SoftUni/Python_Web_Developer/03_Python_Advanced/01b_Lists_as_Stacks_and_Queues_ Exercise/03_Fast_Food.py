from collections import deque

food_quantity = int(input())
orders = list(map(int, input().split()))
print(max(orders))
orders_queue = deque(orders)
orders_left = []

for order in range(len(orders)):
    current_order = orders_queue.popleft()
    if food_quantity >= current_order:
        food_quantity -= current_order
    else:
        orders_left.append(str(current_order))
        while orders_queue:
            orders_left.append(str(orders_queue.popleft()))
        print(f"Orders left:", end=" ")
        print(*orders_left)
        break

if not orders_left:
    print("Orders complete")