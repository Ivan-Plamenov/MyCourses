import itertools

n = int(input())
count = 0

for x1, x2, x3 in itertools.product(range(n + 1), range(n + 1), range(n + 1)):
    sum = x1 + x2 + x3

    if sum == n:
        count += 1

print(count)
