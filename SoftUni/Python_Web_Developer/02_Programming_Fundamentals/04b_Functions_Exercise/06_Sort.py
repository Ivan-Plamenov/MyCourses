def sort_list(str):
    lst = [int(i) for i in str.split(" ")]
    return sorted(lst)


num = input()
print(sort_list(num))
