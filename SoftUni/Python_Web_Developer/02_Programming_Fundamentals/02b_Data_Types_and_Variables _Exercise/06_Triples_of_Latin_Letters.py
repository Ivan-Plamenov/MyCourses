import itertools

num = int(input())

for i, k, j in itertools.product(range(num), range(num), range(num)):
    print(f"{chr(97 + i)}{chr(97 + k)}{chr(97 + j)}")
