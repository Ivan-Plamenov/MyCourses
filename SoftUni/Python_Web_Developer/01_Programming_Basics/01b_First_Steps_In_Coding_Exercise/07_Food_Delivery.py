menus_chicken = int(input())
menus_fish = int(input())
menus_veggie = int(input())

sum_chicken = menus_chicken * 10.35
sum_fish = menus_fish * 12.40
sum_veggie = menus_veggie * 8.15
sum_dessert = (sum_chicken + sum_fish + sum_veggie) * 0.2
sum_delivery = 2.5

total_sum = sum_chicken + sum_fish + sum_veggie + sum_dessert + sum_delivery
print(total_sum)