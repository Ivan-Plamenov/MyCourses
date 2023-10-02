animal = input()
is_mammal = animal == "dog"
is_reptile = animal in ["crocodile", "tortoise", "snake"]

if is_mammal:
    print("mammal")

elif is_reptile:
    print("reptile")

else:
    print("unknown")
