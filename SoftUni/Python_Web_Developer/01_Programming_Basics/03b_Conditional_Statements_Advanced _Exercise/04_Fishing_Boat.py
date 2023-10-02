budget = int(input())
season = input()
fishermen = int(input())
boat_rent = 0

if season == "Spring":
    boat_rent = 3000
elif season in ["Summer", "Autumn"]:
    boat_rent = 4200
elif season == "Winter":
    boat_rent = 2600

if fishermen <= 6:
    boat_rent *= 0.9
elif fishermen <= 11:
    boat_rent *= 0.85
else:
    boat_rent *= 0.75

if season != "Autumn" and fishermen % 2 == 0:
    boat_rent *= 0.95
difference = abs(boat_rent - budget)
if budget >= boat_rent:
    print(f"Yes! You have {difference:.2f} leva left.")
if budget < boat_rent:
    print(f"Not enough money! You need {difference:.2f} leva.")
