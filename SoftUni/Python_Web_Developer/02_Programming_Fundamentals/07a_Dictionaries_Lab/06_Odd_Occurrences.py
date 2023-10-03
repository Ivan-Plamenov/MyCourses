sequence_of_words = input().split()

dict_items = {}
for item in sequence_of_words:
    if item.lower() not in dict_items:
        dict_items[item.lower()] = 1
    else:
        dict_items[item.lower()] += 1

result = [key for key, value in dict_items.items() if value % 2 != 0]
print(" ".join(result))
