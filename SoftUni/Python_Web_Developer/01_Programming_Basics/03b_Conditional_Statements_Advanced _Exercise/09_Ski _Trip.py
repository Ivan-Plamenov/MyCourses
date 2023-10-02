days = int(input())
room_type = input()
grade = input()
price = 0
room_for_one_person = 18
apartment = 25
president_apartment = 35
nights = days - 1
if room_type == "apartment":
    if days < 10:
        price = apartment * nights - (apartment * nights * 0.3)
    elif 10 < days < 15:
        price = apartment * nights - (apartment * nights * 0.35)
    else:
        price = apartment * nights - (apartment * nights * 0.5)
elif room_type == "room for one person":
    price = room_for_one_person * nights
elif days < 10:
    price = president_apartment * nights - (president_apartment * nights * 0.1)
elif 10 < days < 15:
    price = president_apartment * nights - (president_apartment * nights * 0.15)
else:
    price = president_apartment * nights - (president_apartment * nights * 0.2)
if grade == "positive":
    price += price * 0.25
else:
    price -= price * 0.10
print(f"{price:.2f}")
