def is_valid(_item):
    count = sum(bool(char.isalnum() or char in ["_", "-"]) for char in _item)
    if 3 <= len(_item) <= 16 and count == len(_item):
        return True


valid_usernames = [i for i in input().split(", ") if is_valid(i)]

print(*valid_usernames, sep="\n")
