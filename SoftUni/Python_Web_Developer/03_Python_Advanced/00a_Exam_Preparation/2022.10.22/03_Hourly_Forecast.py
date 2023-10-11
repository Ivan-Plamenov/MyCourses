def forecast(*locations):
    weather_priority = {"Sunny": 1, "Cloudy": 2, "Rainy": 3}
    weather_locations = {"Sunny": [], "Cloudy": [], "Rainy": []}

    for location, weather in locations:
        weather_locations[weather].append(location)

    # Sort locations for each weather alphabetically
    for weather in weather_locations:
        weather_locations[weather].sort()

    # Prepare the output by sorting based on weather priority and then by location name
    output = []
    for weather, priority in sorted(weather_priority.items(), key=lambda x: x[1]):
        for location in weather_locations[weather]:
            output.append(f"{location} - {weather}")

    return "\n".join(output)
