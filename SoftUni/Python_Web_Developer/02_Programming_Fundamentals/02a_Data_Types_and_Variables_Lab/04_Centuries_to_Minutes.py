import math

centuries = int(input())

year = centuries * 100
days = math.trunc(year * 365.2422)
hours = days * 24
minutes = hours * 60

print(
    f"{centuries} centuries = {year} years = {days} days = {hours} hours = {minutes} minutes"
)
