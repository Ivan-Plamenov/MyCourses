import re

regex = re.compile(
    r"(www\.)"
    r"([A-Za-z0-9-]+)"
    r"(\.[a-z]+)"
    r"(\.[a-z]+)?"
    r"(\.[a-z]+)?"
    r"(\.[a-z]+)?"
)

data = input()

while len(data) != 0:
    match = regex.finditer(data)
    for result in match:
        print(result[0])
    data = input()
