def func_executor(*args):
    result = ""
    
    for func in args:
        func_name, func_args = func
        result += f"{func_name.__name__} - {func_name(*func_args)}" + "\n"
    
    return result