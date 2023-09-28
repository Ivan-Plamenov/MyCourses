deposit = float(input())
lenght_of_deposit = int(input())
yearly_interest = float(input())

sum = deposit + lenght_of_deposit * ((deposit * yearly_interest/100) / 12)
print(sum)
