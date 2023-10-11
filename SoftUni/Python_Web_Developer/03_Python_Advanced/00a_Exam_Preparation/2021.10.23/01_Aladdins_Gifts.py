# 50 / 100
def craft_presents(materials: list, magic: list):
    gifts = {"Gemstone": 0, "Porcelain Sculpture": 0, "Gold": 0, "Diamond Jewellery": 0}

    while materials and magic:
        material_value = materials[-1]
        magic_value = magic[0]
        product = material_value + magic_value

        if product < 100:
            if product % 2 == 0:
                materials[-1] *= 2
                magic[0] *= 3
                product = materials[-1] + magic[0]
            else:
                product *= 2
        elif 400 < product < 500:
            product /= 2

        if 100 <= product <= 199:
            gifts["Gemstone"] += 1
            materials.pop()
            magic.pop(0)
        elif 200 <= product <= 299:
            gifts["Porcelain Sculpture"] += 1
            materials.pop()
            magic.pop(0)
        elif 300 <= product <= 399:
            gifts["Gold"] += 1
            materials.pop()
            magic.pop(0)
        elif 400 <= product <= 499:
            gifts["Diamond Jewellery"] += 1
            materials.pop()
            magic.pop(0)
        else:
            materials.pop()
            magic.pop(0)

    if (gifts["Gemstone"] > 0 and gifts["Porcelain Sculpture"] > 0) or (
        gifts["Gold"] > 0 and gifts["Diamond Jewellery"] > 0
    ):
        print("The wedding presents are made!")
    else:
        print("Aladdin does not have enough wedding presents.")

    if materials:
        print("Materials left:", ", ".join(map(str, reversed(materials))))
    if magic:
        print("Magic left:", ", ".join(map(str, magic)))

    for gift, count in sorted(gifts.items()):
        if count > 0:
            print(f"{gift}: {count}")


# Take input from console and call the function
materials_input = [int(x) for x in input().split()]
magic_input = [int(x) for x in input().split()]

craft_presents(materials_input, magic_input)
