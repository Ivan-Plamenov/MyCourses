n = int(input())

number_stack = []

for _ in range(n):
    query = input().split()
    action = query[0]

    if action == "1":
        number = int(query[1])
        number_stack.append(number)
    
    elif number_stack:
        if action == "2":
            number_stack.pop()
    
        elif action == "3":
            print(max(number_stack))
    
        elif action == "4":
            print(min(number_stack))

reversed_stack = []

while number_stack:
    print(number_stack.pop(), end='')
    if number_stack:
        print(', ', end='')