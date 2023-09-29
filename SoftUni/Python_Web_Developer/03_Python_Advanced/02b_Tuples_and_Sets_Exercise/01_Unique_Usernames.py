
username_count = int(input())

unique_usernames = set()

for _ in range(username_count):
    unique_usernames.add(input())

# for name in unique_usernames:
#     print(name)

print('\n'.join(unique_usernames))