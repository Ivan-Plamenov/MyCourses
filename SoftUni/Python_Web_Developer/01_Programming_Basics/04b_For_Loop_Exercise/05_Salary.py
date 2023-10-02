open_tabs = int(input())
salary = float(input())
penalty = 0
tab = ""

for _ in range(1, open_tabs + 1):
    tab = input()
    if tab == "Facebook":
        penalty += 150
    elif tab == "Instagram":
        penalty += 100
    elif tab == "Reddit":
        penalty += 50
    if penalty >= salary:
        break

diff = abs(salary - penalty)
if penalty >= salary:
    print("You have lost your salary.")

else:
    print(f"{diff:.0f}")
