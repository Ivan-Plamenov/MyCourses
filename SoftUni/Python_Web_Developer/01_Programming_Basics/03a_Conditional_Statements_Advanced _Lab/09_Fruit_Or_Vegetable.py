product = input()
is_fruit = product in ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"]
is_veggie = product in ["tomato", "cucumber", "pepper", "carrot"]

if is_fruit:
    print("fruit")

elif is_veggie:
    print("vegetable")

else:
    print("unknown")
