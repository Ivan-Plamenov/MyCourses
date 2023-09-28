packs_pens = int(input())
packs_markers = int(input())
lit_deteregent = float(input())
discount = float(input())
discount_percet = discount * 0.01

price_pens = packs_pens * 5.8
price_markers = packs_markers * 7.2
price_deteregent = lit_deteregent * 1.2

sum_total = price_pens + price_markers + price_deteregent
sum_discount = sum_total - (sum_total * discount_percet)

print(sum_discount)