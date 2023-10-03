while True:
    word = input()
    if word == "End":
        break
    if word != "SoftUni":
        for i in word:
            for _ in range(2):
                print(i, end="")
        print()
