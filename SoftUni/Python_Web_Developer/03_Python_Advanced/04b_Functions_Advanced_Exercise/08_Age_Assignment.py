def age_assignment(*args, **kwargs):
    result = ""
    
    for full_name in args:
        first_letter = full_name[0]
        kwargs[full_name] = kwargs[first_letter]
        del kwargs[first_letter]
    
    sorted_names = sorted(kwargs.items(), key=lambda x: x[0])
    
    for name, age in sorted_names:
        result += f"{name} is {age} years old." + "\n"
    
    return result