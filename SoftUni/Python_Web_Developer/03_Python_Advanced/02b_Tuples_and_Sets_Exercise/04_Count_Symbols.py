text = input()
characters = {}
for character in text:
    if character not in characters:
        characters[character] = 0
    characters[character] += 1
for key in sorted(characters):
    occurrences = characters[key]
    print(f"{key}: {occurrences} time/s")
