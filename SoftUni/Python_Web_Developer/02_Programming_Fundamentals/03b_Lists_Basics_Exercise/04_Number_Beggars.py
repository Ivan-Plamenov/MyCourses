lst = input().split(sep=", ")
lst_int = [eval(i) for i in lst]

beggars = int(input())
beggars_lst = []
for counter in range(beggars):
    current_beggar = sum(lst_int[i] for i in range(counter, len(lst_int), beggars))
    beggars_lst.append(current_beggar)
print(beggars_lst)
