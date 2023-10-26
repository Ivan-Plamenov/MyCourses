from itertools import permutations


def possible_permutations(elements):
    for perm in permutations(elements):
        yield list(perm)


# Test Cases
[
    print(n) for n in possible_permutations([1, 2, 3])
]  # Output: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
[print(n) for n in possible_permutations([1])]  # Output: [1]
