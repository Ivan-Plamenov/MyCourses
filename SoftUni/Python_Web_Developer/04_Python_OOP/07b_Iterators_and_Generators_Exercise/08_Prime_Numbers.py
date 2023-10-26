def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True


def get_primes(numbers):
    for num in numbers:
        if is_prime(num):
            yield num


# Test Cases:
print(list(get_primes([2, 4, 3, 5, 6, 9, 1, 0])))  # Output: [2, 3, 5]
print(list(get_primes([-2, 0, 0, 1, 1, 0])))  # Output: []
