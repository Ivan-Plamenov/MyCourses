def print_rhombus(N):
    for i in range(1, N + 1):
        spaces = " " * (N - i)
        stars = "* " * i
        print(spaces + stars)

    for i in range(N - 1, 0, -1):
        spaces = " " * (N - i)
        stars = "* " * i
        print(spaces + stars)


N = int(input())
if N <= 0:
    print("Please enter a positive integer.")
else:
    print_rhombus(N)
