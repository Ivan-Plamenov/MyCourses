from collections import Counter


def is_valid(_ticket):
    if len(_ticket) == 20:
        return True


def is_winner(_symbols, _ticket, _symbol_count):
    for symbol in _symbols:
        combinations = [symbol * 9, symbol * 8, symbol * 7, symbol * 6]
        for combination in combinations:
            if (
                combination in _ticket[: len(_ticket) // 2]
                and combination in _ticket[len(_ticket) // 2 :]
            ):
                _symbol_count.append(len(combination))
                return True
        combinations.clear()


def is_jackpot(_symbols, _ticket):
    for symbol in _symbols:
        if (
            symbol * 10 in _ticket[: len(_ticket) // 2]
            and symbol * 10 in _ticket[len(_ticket) // 2 :]
        ):
            return True


tickets = [elem.replace(" ", "") for elem in input().split(",")]
symbols = ["@", "#", "$", "^"]
symbol_count = []

for ticket in tickets:
    if is_valid(ticket):
        if is_jackpot(symbols, ticket):
            print(
                f'ticket "{ticket}" - 10{Counter(ticket).most_common()[0][0]} Jackpot!'
            )
        elif is_winner(symbols, ticket, symbol_count):
            print(
                f'ticket "{ticket}" - {symbol_count[0]}{Counter(ticket).most_common()[0][0]}'
            )
            symbol_count.clear()
        else:
            print(f'ticket "{ticket}" - no match')
    else:
        print("invalid ticket")
