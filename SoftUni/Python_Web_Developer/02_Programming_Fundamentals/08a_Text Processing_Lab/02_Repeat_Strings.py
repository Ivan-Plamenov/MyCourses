command = input().split()
result = list(map(lambda x: x * len(x), command))
print("".join(list(result)))
