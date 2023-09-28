needed_plastic = int(input())
needed_paint = int(input())
needed_thinner = int(input())
needed_work = int(input())

sum_plastic = needed_plastic + 2
sum_paint = needed_paint + needed_paint * 0.1
sum_bags = 0.4
sum_materials = sum_plastic * 1.5 + sum_paint * 14.5 + needed_thinner * 5 + sum_bags
sum_work = needed_work * sum_materials * 0.3

total_sum = sum_materials + sum_work

print(total_sum)