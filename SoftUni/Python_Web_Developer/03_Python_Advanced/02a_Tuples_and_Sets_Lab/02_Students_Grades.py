number_of_students = int(input())

students = {}

for _ in range(number_of_students):
    name, grade = input().split()
    if name not in students:
        students[name] = []
    students[name].append(float(grade))

for student_name, grades in students.items():
    formated_grades = " ".join([f"{grade:.2f}" for grade in grades])
    print(
        f"{student_name} -> {formated_grades} " f"(avg: {sum(grades)/len(grades):.2f})"
    )
