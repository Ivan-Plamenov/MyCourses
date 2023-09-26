unique_usernames = set()
username_count = int(input())
for _ in range(username_count):
    username = input()
    unique_usernames.add(username)
[print(name) for name in unique_usernames]
