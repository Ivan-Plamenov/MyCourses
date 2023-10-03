string = input()
second_string = input()

while string in second_string:
    second_string = second_string.replace(string, "")

print(second_string)
