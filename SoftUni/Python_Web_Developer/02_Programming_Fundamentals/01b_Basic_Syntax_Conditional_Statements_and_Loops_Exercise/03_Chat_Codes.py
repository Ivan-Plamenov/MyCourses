messages = int(input())
for _ in range(messages):
    num = int(input())
    if num == 86:
        print("How are you?")
    elif num == 88:
        print("Hello")
    if num != 86 and num < 88:
        print("GREAT!")
    if num > 88:
        print("Bye.")
