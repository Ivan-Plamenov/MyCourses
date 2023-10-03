number = int(input())
res = []
res = [str(int(x)) for x in str(number)]
res.sort(reverse=True)
res = "".join(res)

print(res)
