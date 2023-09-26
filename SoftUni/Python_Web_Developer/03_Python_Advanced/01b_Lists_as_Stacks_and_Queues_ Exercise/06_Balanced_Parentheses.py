parenthesis_sequence = input()
opening_parenthesis = []
balanced = True
for item in parenthesis_sequence:
    if item == "(" or item == "[" or item == "{":
        opening_parenthesis.append(item)
    else:
        if not opening_parenthesis:
            balanced = False
            break
        match = opening_parenthesis.pop()
        if item == ")":
            if match != "(":
                balanced = False
                break
        elif item == "]":
            if match != "[":
                balanced = False
                break
        elif item == "}":
            if match != "{":
                balanced = False
                break
if not opening_parenthesis and balanced:
    print("YES")
else:
    print("NO")