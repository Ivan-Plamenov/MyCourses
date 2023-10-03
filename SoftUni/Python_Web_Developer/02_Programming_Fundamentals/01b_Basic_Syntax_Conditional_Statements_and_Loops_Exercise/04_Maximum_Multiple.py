import sys

divisor = int(input())
boundary = int(input())

largest = -sys.maxsize

for N in range(1, boundary + 1):
    if N % divisor == 0 and N <= boundary and N > 0 and N > largest:
        largest = N

print(largest)
