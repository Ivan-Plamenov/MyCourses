import re

re_name = r"[0123456789+\-*\/\.]"
re_dmg = r"[+|-]?\d+\.?\d*"

# 90/100 in Judge

book = input().split(",")
book = sorted([i.strip() for i in book])

health = 0
damage = 0
full_book = {}

for name in book:
    for letter in name:
        if letter not in re_name:
            health += ord(letter)
    find_num = re.findall(re_dmg, name)
    for number in find_num:
        if "-" in number:
            damage -= float(number[1:])
        elif "+" in number:
            damage += float(number[1:])
        else:
            damage += float(number)
    for letter in name:
        if letter == "*":
            damage *= 2
    for letter in name:
        if letter == "/":
            damage /= 2
    full_book[name] = [health, damage]
    health = 0
    damage = 0

for key, value in sorted(full_book.items(), key=lambda x: x):
    print(f"{key} - {value[0]} health, {value[1]:.2f} damage")
