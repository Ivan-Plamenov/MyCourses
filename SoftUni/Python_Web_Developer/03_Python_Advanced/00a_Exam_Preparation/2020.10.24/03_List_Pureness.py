def best_list_pureness(numbers, K):
    # Helper function to compute pureness
    def compute_pureness(nums):
        return sum(index * num for index, num in enumerate(nums))

    # Initialize max pureness and best rotation
    max_pureness = compute_pureness(numbers)
    best_rotation = 0

    # Go through each rotation and compute pureness
    for rotation in range(1, min(K + 1, len(numbers))):
        # Rotate the list
        numbers.insert(0, numbers.pop())
        current_pureness = compute_pureness(numbers)
        if current_pureness > max_pureness:
            max_pureness = current_pureness
            best_rotation = rotation

    return f"Best pureness {max_pureness} after {best_rotation} rotations"
