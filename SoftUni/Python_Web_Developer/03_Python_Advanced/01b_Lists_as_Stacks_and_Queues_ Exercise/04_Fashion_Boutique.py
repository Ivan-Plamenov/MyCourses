clothes_stack = list(map(int, input().split()))
rack_capacity = int(input())
rack_count = 0
current_rack = 0

while clothes_stack:
    current_clothing = clothes_stack.pop()
    if current_rack + current_clothing == rack_capacity:
        rack_count += 1
        current_rack = 0
    elif current_rack + current_clothing < rack_capacity:
        current_rack += current_clothing
    elif current_rack + current_clothing > rack_capacity:
        rack_count += 1
        current_rack = current_clothing

if current_rack > 0:
    rack_count += 1
print(rack_count)