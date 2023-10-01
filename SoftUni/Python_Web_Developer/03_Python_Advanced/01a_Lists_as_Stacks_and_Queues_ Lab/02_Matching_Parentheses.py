algebraic_expression = input()
stack = []

for index in range(len(algebraic_expression)):
    if algebraic_expression[index] == "(":
        stack.append(index)
    elif algebraic_expression[index] == ")":
        start_index = stack.pop()
        last_index = index + 1
        print(algebraic_expression[start_index:last_index])
