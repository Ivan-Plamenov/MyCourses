def grocery_store(**kwargs):
    receipt = dict(sorted(kwargs.items(), key=lambda kvp: (-kvp[1], -len(kvp[0]), kvp[0])))
    result = []

    for product, quantity in receipt.items():
        result.append(f"{product}: {quantity}")

    return"\n".join(result)