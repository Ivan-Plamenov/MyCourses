def even_numbers(function):
    def wrapper(numbers):
        even_numbers = [num for num in numbers if num % 2 == 0]
        return even_numbers

    return wrapper


def multiply(times):
    def decorator(function):
        def wrapper(*args, **kwargs):
            result = function(*args, **kwargs)
            return result * times

        return wrapper

    return decorator


@multiply(3)
def add_ten(number):
    return number + 10


print(add_ten(3))


@multiply(5)
def add_ten(number):
    return number + 10


print(add_ten(6))
