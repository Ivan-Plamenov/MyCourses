def perfect_num(num):
    divisor_sum = sum(i for i in range(1, num) if num % i == 0)
    if divisor_sum == num:
        print("We have a perfect number!")
    else:
        print("It's not so perfect.")


n = int(input())
perfect_num(n)
