import re

data = input()

regex = re.compile(r"(?P<furn>>>\w+<<)" r"(?P<price>\d+\.?\d+?)!" r"(?P<qty>\d+)")
total_spent = 0
furn_list = []

while data != "Purchase":
    match = regex.finditer(data)
    for purchase in match:
        furn_list.append(purchase[1])
        total_spent += float(purchase[2]) * int(purchase[3])
    data = input()

furn_list = [i.replace("<<", "").replace(">>", "") for i in furn_list]
print(f"Bought furniture:")
for furn in furn_list:
    print(f"{furn}")
print(f"Total money spend: {total_spent:.2f}")
