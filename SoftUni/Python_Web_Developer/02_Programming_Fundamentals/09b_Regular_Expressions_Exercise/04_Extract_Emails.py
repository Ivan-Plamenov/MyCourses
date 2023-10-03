import re

string = input()

regex = (
    r"\b((?<!-|\.)[A-Za-z0-9]+[-_\.]?[A-Za-z0-9]+?)"
    r"(@)"
    r"([A-Za-z]+[-]?[A-Za-z]+?)"
    r"(\.[A-Za-z]+[-]?[A-Za-z]+?)"
    r"(\.[A-Za-z]+[-]?[A-Za-z]+?)?"
)

match = re.findall(regex, string)

for result in match:
    print(*result, sep="")
