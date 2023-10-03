import string

upper = list(string.ascii_uppercase)
lower = list(string.ascii_lowercase)
mid_num = 0
result = 0

text = [elem.replace(" ", "") for elem in input().split()]

for elem in text:
    if elem[0].isupper():
        mid_num = int(elem[1:-1]) / (upper.index(elem[0]) + 1)
    else:
        mid_num = int(elem[1:-1]) * (lower.index(elem[0]) + 1)
    if elem[-1].isupper():
        result += mid_num - (upper.index(elem[-1]) + 1)
    else:
        result += mid_num + (lower.index(elem[-1]) + 1)

print(f"{result:.2f}")
