from collections import deque


def create_bomb(bombs, value):
    if value == 40:
        bombs["Datura Bombs"] += 1
    elif value == 60:
        bombs["Cherry Bombs"] += 1
    elif value == 120:
        bombs["Smoke Decoy Bombs"] += 1


def bomb_pouch_filled(bombs):
    return all([count >= 3 for count in bombs.values()])


bomb_effects = deque(map(int, input().split(", ")))
bomb_casings = list(map(int, input().split(", ")))

bombs = {"Datura Bombs": 0, "Cherry Bombs": 0, "Smoke Decoy Bombs": 0}

while bomb_effects and bomb_casings and not bomb_pouch_filled(bombs):
    current_effect = bomb_effects[0]
    current_casing = bomb_casings[-1]
    total = current_effect + current_casing

    if total in [40, 60, 120]:
        create_bomb(bombs, total)
        bomb_effects.popleft()
        bomb_casings.pop()
    else:
        bomb_casings[-1] -= 5

if bomb_pouch_filled(bombs):
    print("Bene! You have successfully filled the bomb pouch!")
else:
    print("You don't have enough materials to fill the bomb pouch.")

if bomb_effects:
    print(f"Bomb Effects: {', '.join(map(str, bomb_effects))}")
else:
    print("Bomb Effects: empty")

if bomb_casings:
    print(f"Bomb Casings: {', '.join(map(str, bomb_casings))}")
else:
    print("Bomb Casings: empty")

for bomb, count in sorted(bombs.items()):
    print(f"{bomb}: {count}")
