fist_list = input().split(", ")
second_list = input().split(", ")
final_list = []

for i in fist_list:
    for k in second_list:
        if i in k and i not in final_list:
            final_list.append(i)


print(final_list)
