pages = int(input())
pages_per_min = int(input())
days = int(input())

time_needed_book = pages / pages_per_min
time_needed_day = time_needed_book // days

print(time_needed_day)
