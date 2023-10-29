def solution():
    def integers():
        current = 1
        while True:
            yield current
            current += 1

    def halves():
        for num in integers():
            yield num / 2

    def take(n, seq):
        result = []
        for _ in range(n):
            result.append(next(seq))
        return result

    return (take, halves, integers)


take = solution()[0]
halves = solution()[1]
