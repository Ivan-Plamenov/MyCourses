joined_lists = [[x.strip() for x in sublist.split()] for sublist in input().split("|")]
flattened_list = []
while joined_lists:
    current_list = joined_lists.pop()
    flattened_list.extend(current_list)
print(*flattened_list)
