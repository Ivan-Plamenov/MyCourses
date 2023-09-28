budget = float(input())
num_vga = int(input())
num_cpu = int(input())
num_ram = int(input())

price_vga = num_vga * 250
price_cpu = num_cpu * price_vga * 0.35
price_ram = num_ram * price_vga * 0.1

total_price = price_vga + price_cpu + price_ram

if num_vga > num_cpu:
    total_price *= 0.85

if budget < total_price :
    print(f"Not enough money! You need {total_price - budget:.02f} leva more!")

else :
    print(f"You have {budget - total_price:.02f} leva left!")