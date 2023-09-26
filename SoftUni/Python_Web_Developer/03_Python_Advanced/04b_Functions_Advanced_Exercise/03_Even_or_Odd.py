def even_odd(*args):
    *numbers, command = args
    result = []
    
    if command == "even":
        [result.append(x) for x in numbers if x % 2 == 0]
    
    elif command == "odd":
        [result.append(x) for x in numbers if x % 2 != 0]
    
    return result