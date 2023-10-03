import re

string = input()
find = r"[A-Za-z0-9]+"
extract = r"\b[_][A-Za-z0-9]+\b"

match = re.findall(extract, string)
for i in range(len(match)):
    if i != len(match) - 1:
        print(f"{match[i][1:]},", end="")
    else:
        print(f"{match[i][1:]}")
