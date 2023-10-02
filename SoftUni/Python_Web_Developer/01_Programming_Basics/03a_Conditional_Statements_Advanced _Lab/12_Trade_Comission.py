city = input()
sales = float(input())
is_valid = True
comission = 0

if city == "Sofia" and sales > 0:
    if 0 <= sales <= 500:
        comission = sales * 0.05
    elif sales <= 1000:
        comission = sales * 0.07
    elif sales <= 10000:
        comission = sales * 0.08
    else:
        comission = sales * 0.12
    print(f"{comission:.02f}")
elif city == "Varna" and sales > 0:
    if 0 <= sales <= 500:
        comission = sales * 0.045
    elif sales <= 1000:
        comission = sales * 0.075
    elif sales <= 10000:
        comission = sales * 0.10
    else:
        comission = sales * 0.13
    print(f"{comission:.02f}")
elif city == "Plovdiv" and sales > 0:
    if 0 <= sales <= 500:
        comission = sales * 0.055
    elif sales <= 1000:
        comission = sales * 0.08
    elif sales <= 10000:
        comission = sales * 0.12
    else:
        comission = sales * 0.145
    print(f"{comission:.02f}")
else:
    is_valid = False
    print("error")
