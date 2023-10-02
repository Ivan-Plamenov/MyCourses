time = int(input())
day = input()

if time > 18 or time < 10 or day == "Sunday":
    print("closed")

else:
    print("open")
