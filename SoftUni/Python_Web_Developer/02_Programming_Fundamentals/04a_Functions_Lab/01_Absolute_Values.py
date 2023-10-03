def abs_numbers(nums):
    return [abs(num) for num in nums]


numbers = list(map(float, input().split(" ")))
print(abs_numbers(numbers))
