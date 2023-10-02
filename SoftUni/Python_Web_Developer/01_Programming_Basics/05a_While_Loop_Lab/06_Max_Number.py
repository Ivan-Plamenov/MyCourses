import sys

input_line = input()
max_num = -sys.maxsize

while input_line != "Stop":
    num = int(input_line)
    if num > max_num:
        max_num = num
    input_line = input()

print(max_num)
