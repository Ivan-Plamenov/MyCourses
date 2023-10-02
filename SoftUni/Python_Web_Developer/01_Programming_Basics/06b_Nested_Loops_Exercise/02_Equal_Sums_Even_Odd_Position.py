first_num = int(input())
second_num = int(input())

for current_num in range(first_num, second_num + 1):
    odd_sum = 0
    even_sum = 0
    current_num = str(current_num)

    for index, digit in enumerate(current_num):
        if index % 2 == 0:
            odd_sum += int(digit)

        else:
            even_sum += int(digit)

    if odd_sum == even_sum:
        print(current_num, end=" ")
