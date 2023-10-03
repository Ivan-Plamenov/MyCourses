text = input()

emoticons = [text[i : i + 2] for i in range(len(text)) if ":" in text[i]]
print(*emoticons, sep="\n")
