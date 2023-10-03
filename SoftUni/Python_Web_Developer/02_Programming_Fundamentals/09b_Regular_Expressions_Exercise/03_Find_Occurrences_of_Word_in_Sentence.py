import re

string = input().casefold()
search = re.compile("\\b" + input().casefold() + "\\b")

count = len(re.findall(search, string))

print(count)
