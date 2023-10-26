def squares(_n: int):
    for num in range(1, _n + 1):
        if isinstance(num**2, int):
            yield num**2


print(list(squares(5)))
