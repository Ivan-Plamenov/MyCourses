type_of_flower = input()
number_of_flowers = int(input())
budget = int(input())

price_roses = 5
price_dahlias = 3.8
price_tulips = 2.8
price_narcissus = 3
price_gladiolus = 2.5

total_price_flowers = 0

if type_of_flower == "Dahlias":
    total_price_flowers = (
        (price_dahlias * number_of_flowers) - (price_dahlias * number_of_flowers * 0.15)
        if number_of_flowers > 90
        else price_dahlias * number_of_flowers
    )
elif type_of_flower == "Gladiolus":
    total_price_flowers = (
        (price_gladiolus * number_of_flowers)
        + (price_gladiolus * number_of_flowers * 0.2)
        if number_of_flowers < 80
        else price_gladiolus * number_of_flowers
    )
elif type_of_flower == "Narcissus":
    total_price_flowers = (
        (price_narcissus * number_of_flowers)
        + (price_narcissus * number_of_flowers * 0.15)
        if number_of_flowers < 120
        else price_narcissus * number_of_flowers
    )
elif type_of_flower == "Roses":
    total_price_flowers = (
        (price_roses * number_of_flowers) - (price_roses * number_of_flowers * 0.1)
        if number_of_flowers > 80
        else price_roses * number_of_flowers
    )
elif type_of_flower == "Tulips":
    total_price_flowers = (
        (price_tulips * number_of_flowers) - (price_tulips * number_of_flowers * 0.15)
        if number_of_flowers > 80
        else price_tulips * number_of_flowers
    )
difference = budget - total_price_flowers

if budget >= total_price_flowers:
    print(
        f"Hey, you have a great garden with {number_of_flowers} {type_of_flower} and {difference:.2f} leva left."
    )
else:
    print(f"Not enough money, you need {abs(difference):.2f} leva more.")
