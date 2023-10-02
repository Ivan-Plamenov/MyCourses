num = int(input())
musala = 0
montblanc = 0
kilimandjaro = 0
k2 = 0
everest = 0
total_climbers = 0

for _ in range(num):
    climbers = int(input())
    total_climbers += climbers

    if climbers < 6:
        musala += climbers

    elif 5 < climbers < 13:
        montblanc += climbers

    elif 12 < climbers < 26:
        kilimandjaro += climbers

    elif 25 < climbers < 41:
        k2 += climbers

    elif climbers >= 41:
        everest += climbers

p1_per = musala / total_climbers * 100
p2_per = montblanc / total_climbers * 100
p3_per = kilimandjaro / total_climbers * 100
p4_per = k2 / total_climbers * 100
p5_per = everest / total_climbers * 100

print(f"{p1_per:.2f}%")
print(f"{p2_per:.2f}%")
print(f"{p3_per:.2f}%")
print(f"{p4_per:.2f}%")
print(f"{p5_per:.2f}%")
