text = input()

encrypted = [chr(ord(i) + 3) for i in text]

print("".join(encrypted))
