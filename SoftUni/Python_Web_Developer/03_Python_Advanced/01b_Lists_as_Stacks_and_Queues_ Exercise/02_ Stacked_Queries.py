n = int(input())
stack = []

for num in range(n):
    query = input().split()
    action = query[0]
    if action == "1":
        number = int(query[1])
        stack.append(number)
    elif action == "2":
        if stack:
            stack.pop()
    elif action == "3":
        if stack:
            print(max(stack))
    elif action == "4":
        if stack:
            print(min(stack))

reversed_stack = []
while stack:
    reversed_stack.append(str(stack.pop()))

print(", ".join(reversed_stack))