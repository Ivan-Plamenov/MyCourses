import itertools

for h, m in itertools.product(range(24), range(60)):
    print(f"{h}:{m}")
