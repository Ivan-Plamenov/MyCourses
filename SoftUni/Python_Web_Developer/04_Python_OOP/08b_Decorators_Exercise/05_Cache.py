from functools import wraps


def cache(func):
    @wraps(func)
    def wrapper(n):
        res = func(n)
        wrapper.log[n] = res
        return res

    wrapper.log = {}
    return wrapper


import unittest


class CacheTests(unittest.TestCase):
    def test_zero_first(self):
        @cache
        def fibonacci(n):
            if n < 2:
                return n
            else:
                return fibonacci(n - 1) + fibonacci(n - 2)

        fibonacci(3)
        self.assertEqual(fibonacci.log, {1: 1, 0: 0, 2: 1, 3: 2})


if __name__ == "__main__":
    unittest.main()
