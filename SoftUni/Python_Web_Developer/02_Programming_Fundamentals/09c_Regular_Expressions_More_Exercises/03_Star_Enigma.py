import re

regex = re.compile(
    r"@"
    r"(?P<name>[A-Za-z]+)"
    r"[^@:!\->]*:"
    r"(?P<pop>\d+)"
    r"[^@:!\->]*!"
    r"(?P<command>[A|D])"
    r"![^@:!\->]*->"
    r"(?P<soldiers>\d+)"
)

lines = int(input())

cipher = ["s", "t", "a", "r"]
cipher_count = 0
decrypted = ""
attacked = []
destroyed = []

for _ in range(lines):
    message = input()

    for symbol in message.casefold():
        if symbol in cipher:
            cipher_count += 1
    for symbol in message:
        decrypted += chr(ord(symbol) - cipher_count)

    match = regex.finditer(decrypted)
    for result in match:
        if result[3] == "A":
            attacked.append(result[1])
        elif result[3] == "D":
            destroyed.append(result[1])

    decrypted = ""
    cipher_count = 0

print(f"Attacked planets: {len(attacked)}")
for planet in sorted(attacked):
    print(f"-> {planet}")
print(f"Destroyed planets: {len(destroyed)}")
for planet in sorted(destroyed):
    print(f"-> {planet}")
