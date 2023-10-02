failed_grades = int(input())
failed_counter = 0
passing_counter = 0
grades_sum = 0
last_problem = ""
has_failed = True

while failed_counter < failed_grades:
    problem_name = input()

    if problem_name == "Enough":
        has_failed = False
        break

    grade = int(input())

    if grade <= 4:
        failed_counter += 1

    grades_sum += grade
    passing_counter += 1
    last_problem = problem_name

if has_failed:
    print(f"You need a break, {failed_grades} poor grades.")

else:
    print(f"Average score:{grades_sum / passing_counter: .2f}")
    print(f"Number of problems: {passing_counter}")
    print(f"Last problem: {last_problem}")
