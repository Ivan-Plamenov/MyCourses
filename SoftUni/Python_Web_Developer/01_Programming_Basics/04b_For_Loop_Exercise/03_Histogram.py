n = int(input())
p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0

for _ in range(n):
    num = int(input())

    if num < 200:
        p1 += 1

    elif 200 <= num < 400:
        p2 += 1

    elif 400 <= num < 600:
        p3 += 1

    elif 600 <= num < 800:
        p4 += 1

    else:
        p5 += 1

p1_per = p1 / n * 100
p2_per = p2 / n * 100
p3_per = p3 / n * 100
p4_per = p4 / n * 100
p5_per = p5 / n * 100


print(f"{p1_per:.2f}%")
print(f"{p2_per:.2f}%")
print(f"{p3_per:.2f}%")
print(f"{p4_per:.2f}%")
print(f"{p5_per:.2f}%")
