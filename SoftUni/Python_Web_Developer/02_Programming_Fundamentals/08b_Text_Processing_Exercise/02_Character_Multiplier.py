string = input().split()

word_1 = list(string[0])
word_2 = list(string[1])
result = 0

if len(word_1) > len(word_2):
    for char in range(len(word_2)):
        result += ord(word_1[char]) * ord(word_2[char])
    for char in word_1[len(word_2) :]:
        result += ord(char)
else:
    for char in range(len(word_1)):
        result += ord(word_1[char]) * ord(word_2[char])
    for char in word_2[len(word_1) :]:
        result += ord(char)

print(result)
