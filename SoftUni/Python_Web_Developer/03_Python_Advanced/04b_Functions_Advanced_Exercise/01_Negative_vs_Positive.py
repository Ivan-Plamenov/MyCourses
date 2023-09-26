def sort_numbers():
    [negatives.append(x) for x in numbers if x < 0]
    [positives.append(x) for x in numbers if x >= 0]


numbers = [int(x) for x in input().split()]
negatives, positives = [], []

sort_numbers()

print(sum(negatives))
print(sum(positives))

if abs(sum(negatives)) > sum(positives):
    print("The negatives are stronger than the positives")
else:
    print("The positives are stronger than the negatives")