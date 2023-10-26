class Calculator:
    def add(*args):
        return sum(args)

    def multiply(*args):
        result = 1
        for num in args:
            result *= num
        return result

    def divide(*args):
        if len(args) == 0:
            raise ValueError("Cannot divide by zero.")
        result = args[0]
        for num in args[1:]:
            if num == 0:
                raise ValueError("Cannot divide by zero.")
            result /= num
        return result

    def subtract(*args):
        result = args[0]
        for num in args[1:]:
            result -= num
        return result


# Test the Calculator class
print(Calculator.add(5, 10, 4))
print(Calculator.multiply(1, 2, 3, 5))
print(Calculator.divide(100, 2))
print(Calculator.subtract(90, 20, -50, 43, 7))
