lines_count = int(input())
intersections = {}
longest_intersection = set()
for _ in range(lines_count):
    first_range, second_range = input().split("-")
    first_start, first_end = first_range.split(",")
    second_start, second_end = second_range.split(",")
    first_set = set(range(int(first_start), int(first_end) + 1))
    second_set = set(range(int(second_start), int(second_end) + 1))
    intersection = first_set.intersection(second_set)
    if len(intersection) > len(longest_intersection):
        longest_intersection = intersection
longest_intersection_numbers = [str(num) for num in longest_intersection]
print(f"Longest intersection is [{', '.join(longest_intersection_numbers)}] with length {len(longest_intersection)}")