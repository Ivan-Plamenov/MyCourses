input_string = input()

stack = list(input_string)

while len(stack) > 0:
    print(stack.pop(), end='')
print()