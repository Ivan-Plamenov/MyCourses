participants = input().split(", ")
info = input()

counter = 0
distance_temp = 0
results = {}

while info != "end of race":
    for name in participants:
        for letter in name:
            if letter in info:
                counter += 1
        if counter == len(name):
            for symbol in info:
                if symbol.isdigit():
                    distance_temp += int(symbol)
            if name in results:
                results[name] += distance_temp
            else:
                results[name] = distance_temp
        counter = 0
        distance_temp = 0
    counter = 0
    info = input()

for key, value in sorted(results.items(), key=lambda x: x[1], reverse=True):
    if counter == 0:
        print(f"1st place: {key}")
        counter += 1
    elif counter == 1:
        print(f"2nd place: {key}")
        counter += 1
    elif counter == 2:
        print(f"3rd place: {key}")
        counter += 1
