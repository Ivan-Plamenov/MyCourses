actor_name = input()
academy_points = float(input())
number_jurys = int(input())
total_points = academy_points
is_nominated = False

for _ in range(number_jurys):
    jury_name = input()
    jury_points = float(input())
    total_points = total_points + (len(jury_name) * jury_points) / 2

    if total_points >= 1250.5:
        is_nominated = True
        break


diff = abs(total_points - 1250.5)

if is_nominated:
    print(
        f"Congratulations, {actor_name} got a nominee for leading role with {total_points:.1f}!"
    )

else:
    print(f"Sorry, {actor_name} you need {diff:.1f} more!")
