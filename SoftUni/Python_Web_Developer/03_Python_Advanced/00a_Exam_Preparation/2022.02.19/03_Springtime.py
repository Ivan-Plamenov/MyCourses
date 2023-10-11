def start_spring(**kwargs):
    # Create a dictionary to group spring objects by type
    type_to_objects = {}

    for object_name, object_type in kwargs.items():
        if object_type not in type_to_objects:
            type_to_objects[object_type] = []
        type_to_objects[object_type].append(object_name)

    # Sort the collections by the number of elements in descending order
    # If two collections have the same number of elements, sort them by type name (ascending)
    sorted_collections = sorted(
        type_to_objects.items(), key=lambda x: (-len(x[1]), x[0])
    )

    # Create the result string
    result = []
    for object_type, objects in sorted_collections:
        # Sort the objects in the collection in ascending order (alphabetically)
        objects.sort()
        result.append(f"{object_type}:")
        result.extend([f"-{obj}" for obj in objects])

    return "\n".join(result)
