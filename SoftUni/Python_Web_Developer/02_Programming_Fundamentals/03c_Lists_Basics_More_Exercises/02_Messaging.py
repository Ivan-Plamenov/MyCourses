numbers = input().split(" ")
letters = list(input())
indexes = []
final_word = []

for i in range(len(numbers)):
    aggregate = sum(int(digit) for digit in numbers[i])
    indexes.append(aggregate)


for index_ in indexes:
    index = index_
    try:
        final_word.append(letters[index])
    except IndexError:
        index = index % len(letters)
        final_word.append(letters[index])
    letters.remove(letters[index])

print("".join(final_word))
