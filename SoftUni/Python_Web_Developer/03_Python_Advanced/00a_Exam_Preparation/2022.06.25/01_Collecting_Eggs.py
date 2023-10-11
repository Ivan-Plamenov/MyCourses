# Read the eggs and pieces of paper sizes
eggs = [int(x) for x in input().split(", ")]
papers = [int(x) for x in input().split(", ")]

filled_boxes = 0

while eggs and papers:
    current_egg = eggs.pop(0)

    # Check for rotten eggs
    if current_egg <= 0:
        continue

    # Check for superstitious egg
    if current_egg == 13:
        papers[0], papers[-1] = papers[-1], papers[0]
        continue

    # Wrap the egg
    current_paper = papers.pop()

    # Check if wrapped egg fits in the box
    if current_egg + current_paper <= 50:
        filled_boxes += 1

# Printing the results
if filled_boxes > 0:
    print(f"Great! You filled {filled_boxes} boxes.")
else:
    print("Sorry! You couldn't fill any boxes!")

if eggs:
    print(f"Eggs left: {', '.join(map(str, eggs))}")

if papers:
    print(f"Pieces of paper left: {', '.join(map(str, papers))}")
