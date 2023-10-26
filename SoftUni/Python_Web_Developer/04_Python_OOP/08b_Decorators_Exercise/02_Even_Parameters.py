from functools import wraps


def even_parameters(function):
    @wraps(function)
    def inner(*args):
        count = 0
        for arg in args:
            if isinstance(arg, int):
                if arg % 2 == 0:
                    count += 1
        if count == len(args):
            return function(*args)
        else:
            return "Please use only even numbers!"

    return inner


@even_parameters
def add(a, b):
    return a + b


print(add(2, 4))
print(add("Peter", 1))


@even_parameters
def multiply(*nums):
    result = 1
    for num in nums:
        result *= num
    return result


print(multiply(2, 4, 6, 8))
print(multiply(2, 4, 9, 8))
