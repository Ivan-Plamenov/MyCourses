def offroad_challenge(fuel_sequence, consumption_indexes, altitudes_required):
    reached_altitudes = []

    # Iterate over the altitudes
    for i in range(4):
        fuel = fuel_sequence.pop()  # get last fuel quantity
        consumption = consumption_indexes.pop(0)  # get first consumption index

        # calculate remaining fuel after consumption
        fuel_after_consumption = fuel - consumption

        if fuel_after_consumption >= altitudes_required[i]:
            reached_altitudes.append(i + 1)
            print(f"John has reached: Altitude {i + 1}")
        else:
            print(f"John did not reach: Altitude {i + 1}")
            break

    # output based on results
    if len(reached_altitudes) == 4:
        print("John has reached all the altitudes and managed to reach the top!")
    elif reached_altitudes:
        reached_str = ", ".join([f"Altitude {a}" for a in reached_altitudes])
        print("John failed to reach the top.")
        print(f"Reached altitudes: {reached_str}")
    else:
        print("John failed to reach the top.")
        print("John didn't reach any altitude.")


# Read the sequences from the console
fuel_sequence = list(map(int, input().split()))
consumption_indexes = list(map(int, input().split()))
altitudes_required = list(map(int, input().split()))

# Call the function with the sequences
offroad_challenge(fuel_sequence, consumption_indexes, altitudes_required)
