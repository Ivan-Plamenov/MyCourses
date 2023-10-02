greening_area = float(input())

greening_area_cost = greening_area * 7.61
greening_area_discount = greening_area_cost * 0.18
greening_area_final_cost = greening_area_cost - greening_area_discount

print(f"The final price is: {greening_area_final_cost} lv.")
print(f"The discount is: {greening_area_discount} lv.")
