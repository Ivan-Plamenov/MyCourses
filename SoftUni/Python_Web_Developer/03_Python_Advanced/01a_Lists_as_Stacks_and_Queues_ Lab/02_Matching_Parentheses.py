algebraic_expression = input()
stack = []

for i in range(len(algebraic_expression)):
    if algebraic_expression[i] == '(':
        stack.append(i)
    elif algebraic_expression[i] == ')':
        print(algebraic_expression[stack.pop():i+1])