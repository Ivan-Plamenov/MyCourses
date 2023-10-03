word = input()
reversed_word = "".join(word[i] for i in range(len(word) - 1, -1, -1))
print(reversed_word)
