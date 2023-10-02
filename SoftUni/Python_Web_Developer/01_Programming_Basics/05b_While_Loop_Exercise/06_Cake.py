width = int(input())
lenght = int(input())

total_cake_pieces = width * lenght
cake_is_over = False
command = input()

while command != "STOP":
    current_pieces = int(command)
    total_cake_pieces -= current_pieces

    if total_cake_pieces < 0:
        cake_is_over = True
        break

    command = input()

if cake_is_over:
    print(f"No more cake left! You need {abs(total_cake_pieces)} pieces more.")

else:
    print(f"{total_cake_pieces} pieces are left.")
