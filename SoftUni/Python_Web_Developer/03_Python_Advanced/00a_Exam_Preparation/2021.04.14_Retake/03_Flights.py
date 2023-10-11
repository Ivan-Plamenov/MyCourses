def flights(*args):
    flight_data = dict()
    iterator = iter(args)

    for city in iterator:
        if city == "Finish":
            break
        passengers = next(iterator)

        if city not in flight_data:
            flight_data[city] = 0
        flight_data[city] += passengers

    return flight_data
