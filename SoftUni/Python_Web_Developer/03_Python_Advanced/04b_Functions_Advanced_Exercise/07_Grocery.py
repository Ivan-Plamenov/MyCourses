def grocery_store(**kwargs):
    receipt = ""
    
    sorted_products = sorted(kwargs.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))
    
    for key, value in sorted_products:
        receipt += f"{key}: {value}" + "\n"
    
    return receipt