type_screening = input()
number_rows = int(input())
number_colums = int(input())
income = 0

if type_screening == "Premiere":
    income = number_colums * number_rows * 12

elif type_screening == "Normal":
    income = number_colums * number_rows * 7.5

elif type_screening == "Discount":
    income = number_colums * number_rows * 5

print(f"{income:.2f} leva")
