import re

string = input()
regex = re.compile(r"\d+")
results = []

while len(string) != 0:
    results.append(regex.finditer(string))
    string = input()

for result in results:
    for match in result:
        print(match.group(), end=" ")
