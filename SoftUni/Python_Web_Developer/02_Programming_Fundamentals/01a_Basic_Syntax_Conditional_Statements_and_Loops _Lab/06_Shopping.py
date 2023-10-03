budget = int(input())
command = input()

while command != "End":
    product_prie = int(command)
    budget -= product_prie
    if budget < 0:
        print("You went in overdraft!")
        break
    command = input()

else:
    print("You bought everything needed.")
