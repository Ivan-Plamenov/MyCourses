from collections import deque
kids = deque(input().split())
nth = int(input())

count = 1

while len(kids) > 0:
    if count == nth:
        kid = kids.popleft()
        count = 1
        if len(kids) == 0:
            break
        print(f"Removed {kid}")
    else:
        kid = kids.popleft()  # .rotate() can be used instead
        kids.append(kid)      # of manually moving the circle
        count += 1

print(f"Last is {kid}")