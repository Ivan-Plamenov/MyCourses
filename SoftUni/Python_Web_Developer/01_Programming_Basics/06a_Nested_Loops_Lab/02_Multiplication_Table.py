import itertools

for a, b in itertools.product(range(1, 10 + 1), range(1, 10 + 1)):
    print(f"{a} * {b} = {a*b}")
