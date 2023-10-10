def numbers_searching(*numbers):
    seen = set()
    duplicates = set()

    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)

    min_num, max_num = min(numbers), max(numbers)
    missing = None

    # Find the missing number
    for i in range(min_num, max_num + 1):
        if i not in seen:
            missing = i
            break

    return [missing, sorted(list(duplicates))]
