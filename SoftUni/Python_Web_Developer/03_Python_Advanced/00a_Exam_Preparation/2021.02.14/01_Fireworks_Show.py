from collections import deque


def fireworks_show(firework_effects_str, explosive_power_str):
    firework_effects = deque(
        [int(x) for x in firework_effects_str.split(", ") if int(x) > 0]
    )
    explosive_power = [int(x) for x in explosive_power_str.split(", ") if int(x) > 0]

    palm_fireworks = 0
    willow_fireworks = 0
    crossette_fireworks = 0

    while firework_effects and explosive_power:
        current_effect = firework_effects.popleft()
        current_explosive = explosive_power.pop()

        if (current_effect + current_explosive) % 3 == 0 and (
            current_effect + current_explosive
        ) % 5 != 0:
            palm_fireworks += 1
        elif (current_effect + current_explosive) % 5 == 0 and (
            current_effect + current_explosive
        ) % 3 != 0:
            willow_fireworks += 1
        elif (current_effect + current_explosive) % 3 == 0 and (
            current_effect + current_explosive
        ) % 5 == 0:
            crossette_fireworks += 1
        else:
            current_effect -= 1
            if current_effect > 0:
                firework_effects.append(current_effect)
            explosive_power.append(current_explosive)

        if palm_fireworks >= 3 and willow_fireworks >= 3 and crossette_fireworks >= 3:
            break

    if palm_fireworks >= 3 and willow_fireworks >= 3 and crossette_fireworks >= 3:
        print("Congrats! You made the perfect firework show!")
    else:
        print("Sorry. You can't make the perfect firework show.")

    if firework_effects:
        print(f"Firework Effects left: {', '.join(map(str, firework_effects))}")

    if explosive_power:
        print(f"Explosive Power left: {', '.join(map(str, explosive_power))}")

    print(f"Palm Fireworks: {palm_fireworks}")
    print(f"Willow Fireworks: {willow_fireworks}")
    print(f"Crossette Fireworks: {crossette_fireworks}")


# Read the input
firework_effects_str = input()
explosive_power_str = input()
# Call the function with the read values
fireworks_show(firework_effects_str, explosive_power_str)
