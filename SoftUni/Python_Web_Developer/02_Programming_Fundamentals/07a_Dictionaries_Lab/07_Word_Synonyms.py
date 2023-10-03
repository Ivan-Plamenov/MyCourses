number = int(input())

dict_of_synonyms = {}

for _ in range(number):
    word = input()
    synonym = input()
    if word not in dict_of_synonyms:
        dict_of_synonyms[word] = []
    dict_of_synonyms[word].append(synonym)

for word in dict_of_synonyms:
    print(f'{word} - {", ".join(dict_of_synonyms[word])}')
