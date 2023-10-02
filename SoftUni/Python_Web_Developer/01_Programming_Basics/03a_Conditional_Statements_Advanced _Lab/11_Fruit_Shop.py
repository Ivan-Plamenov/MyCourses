fruit = input()
day = input()
quantity = float(input())

price = 0
invalid = False

if day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]:
    if fruit == "apple":
        price = quantity * 1.20
    elif fruit == "banana":
        price = quantity * 2.50
    elif fruit == "grapefruit":
        price = quantity * 1.45
    elif fruit == "grapes":
        price = quantity * 3.85
    elif fruit == "kiwi":
        price = quantity * 2.70
    elif fruit == "orange":
        price = quantity * 0.85
    elif fruit == "pineapple":
        price = quantity * 5.50
    else:
        invalid = True
elif day in ["Saturday", "Sunday"]:
    if fruit == "apple":
        price = quantity * 1.25
    elif fruit == "banana":
        price = quantity * 2.70
    elif fruit == "grapefruit":
        price = quantity * 1.60
    elif fruit == "grapes":
        price = quantity * 4.20
    elif fruit == "kiwi":
        price = quantity * 3.00
    elif fruit == "orange":
        price = quantity * 0.90
    elif fruit == "pineapple":
        price = quantity * 5.60
    else:
        invalid = True
else:
    invalid = True

if invalid:
    print("error")
else:
    print(f"{price:.2f}")
