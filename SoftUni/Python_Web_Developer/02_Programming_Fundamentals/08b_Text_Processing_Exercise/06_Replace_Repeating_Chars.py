text = input()

new_text = []

for index, value in enumerate(text):
    if index == len(text) - 1:
        new_text.append(value)

    elif text[index] != text[index + 1]:
        new_text.append(value)
print("".join(new_text))
