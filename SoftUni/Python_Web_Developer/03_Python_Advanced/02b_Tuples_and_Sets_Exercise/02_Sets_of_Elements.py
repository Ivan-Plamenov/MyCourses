n, m = input().split()
set_n = set()
set_m = set()
for _ in range(int(n)):
    number = int(input())
    set_n.add(number)
for _ in range(int(m)):
    number = int(input())
    set_m.add(number)
unique_elements = set_m.intersection(set_n)
[print(element) for element in unique_elements]