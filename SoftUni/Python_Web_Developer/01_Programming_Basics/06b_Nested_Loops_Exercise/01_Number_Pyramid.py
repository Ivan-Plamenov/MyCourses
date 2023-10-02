num = int(input())
counter = 1
is_printed = False

for row in range(1, num + 1):
    for _ in range(1, row + 1):
        print(counter, end=" ")
        counter += 1

        if counter > num:
            is_printed = True
            break

    if is_printed:
        break
    print()
