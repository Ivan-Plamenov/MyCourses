travel_price = float(input())
number_puzzles = int(input())
number_dolls = int(input())
number_bears = int(input())
number_minions = int(input())
number_cars = int(input())

number_toys = number_puzzles + number_dolls + number_bears + number_minions + number_cars
sum_toys = number_puzzles * 2.6 + number_dolls * 3 + number_bears * 4.1 + number_minions * 8.2 + number_cars * 2

if number_toys >= 50 :
    sum_toys = sum_toys - sum_toys * 0.25

sum_net = sum_toys - sum_toys * 0.1
difference = abs(travel_price-sum_net)

if sum_net >= travel_price :
    print(f"Yes! {difference:.02f} lv left.")

else:
    print(f"Not enough money! {difference:.02f} lv needed.")