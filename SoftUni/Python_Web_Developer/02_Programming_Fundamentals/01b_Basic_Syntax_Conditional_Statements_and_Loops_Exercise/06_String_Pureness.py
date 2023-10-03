count = int(input())
forbidden = [",", ".", "_"]
pure_flag = True

for _ in range(count):
    data = input()
    for sym in forbidden:
        if sym in data:
            pure_flag = False
    if pure_flag:
        print(f"{data} is pure.")
    else:
        print(f"{data} is not pure!")
    pure_flag = True
