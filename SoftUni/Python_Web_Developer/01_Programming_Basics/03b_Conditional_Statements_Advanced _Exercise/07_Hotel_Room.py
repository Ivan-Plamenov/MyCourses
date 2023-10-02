month = input()
number_of_nights = int(input())
type_of_room = " "
price_apartment = 0
price_studio = 0
discount_apartment = 0
discount_studio = 0

if month in ["May", "October"]:
    price_studio = number_of_nights * 50
    price_apartment = number_of_nights * 65
    if number_of_nights > 7:
        discount_studio = price_studio * 0.05
    if number_of_nights > 14:
        discount_studio = price_studio * 0.30
        discount_apartment = price_apartment * 0.1

elif month in ["June", "September"]:
    price_studio = number_of_nights * 75.2
    price_apartment = number_of_nights * 68.7
    if number_of_nights > 14:
        discount_studio = price_studio * 0.2
        discount_apartment = price_apartment * 0.1


elif month in ["July", "August"]:
    price_studio = number_of_nights * 76
    price_apartment = number_of_nights * 77
    if number_of_nights > 14:
        discount_apartment = price_apartment * 0.1

final_price_studio = price_studio - discount_studio
final_price_apartment = price_apartment - discount_apartment

print(f"Apartment: {final_price_apartment:.2f} lv.")
print(f"Studio: {final_price_studio:.2f} lv.")
