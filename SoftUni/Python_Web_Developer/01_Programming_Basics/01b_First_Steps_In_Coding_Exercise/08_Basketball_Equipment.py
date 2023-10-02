fee_training = int(input())

price_shoes = 0.6 * fee_training
price_kit = 0.8 * price_shoes
price_ball = 0.25 * price_kit
price_misc = 0.2 * price_ball

total_expences = fee_training + price_shoes + price_kit + price_ball + price_misc
print(total_expences)
