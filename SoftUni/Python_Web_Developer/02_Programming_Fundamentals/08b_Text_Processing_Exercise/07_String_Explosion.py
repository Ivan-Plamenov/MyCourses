text = list(input())

strength = 0
stop_flag = False

for index, value in enumerate(text):
    if value == ">" and text[index + 1].isdigit():
        strength += int(text[index + 1])
        if int(text[index + 1]) != 0 or strength != 0:
            text.pop(index + 1)
            strength -= 1
    while strength != 0:
        for i in range(index, len(text)):
            if i == len(text) - 1:
                stop_flag = True
                if text[i] != ">":
                    text.pop(i)
                break
            if text[i] != ">":
                text.pop(i)
                strength -= 1
                break
            else:
                if text[i + 1].isdigit():
                    strength += int(text[i + 1])
                    if int(text[i + 1]) != 0 or strength != 0:
                        text.pop(i + 1)
                        strength -= 1
                    break
        if stop_flag:
            break
    if stop_flag:
        break

print("".join(text))
