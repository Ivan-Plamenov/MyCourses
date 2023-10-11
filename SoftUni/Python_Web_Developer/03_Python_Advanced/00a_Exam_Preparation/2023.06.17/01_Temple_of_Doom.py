from collections import deque

# Get the inputs
tools = deque(map(int, input().split()))
substances = list(map(int, input().split()))
challenges = list(map(int, input().split()))

while tools and substances and challenges:
    tool = tools.popleft()
    substance = substances.pop()

    result = tool * substance

    if result in challenges:
        challenges.remove(result)
    else:
        tool += 1
        substance -= 1

        if substance > 0:
            substances.append(substance)
        tools.append(tool)

if not challenges:
    print("Harry found an ostracon, which is dated to the 6th century BCE.")
else:
    print("Harry is lost in the temple. Oblivion awaits him.")

if tools:
    print(f"Tools: {', '.join(map(str, tools))}")
if substances:
    print(f"Substances: {', '.join(map(str, substances))}")
if challenges:
    print(f"Challenges: {', '.join(map(str, challenges))}")
