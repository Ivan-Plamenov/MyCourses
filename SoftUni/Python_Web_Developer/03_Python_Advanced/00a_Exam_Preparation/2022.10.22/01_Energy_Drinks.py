caffeine_mg = [int(x) for x in input().split(", ")]
drinks = [int(x) for x in input().split(", ")]

stamat_caffeine = 0

while caffeine_mg and drinks:
    caffeine_current = caffeine_mg.pop()
    drink_current = drinks[0]

    caffeine_from_drink = caffeine_current * drink_current

    if stamat_caffeine + caffeine_from_drink <= 300:
        stamat_caffeine += caffeine_from_drink
        drinks.pop(0)
    else:
        stamat_caffeine = max(0, stamat_caffeine - 30)
        drinks.append(drinks.pop(0))

if drinks:
    print(f"Drinks left: {', '.join(map(str, drinks))}")
else:
    print("At least Stamat wasn't exceeding the maximum caffeine.")

print(f"Stamat is going to sleep with {stamat_caffeine} mg caffeine.")
