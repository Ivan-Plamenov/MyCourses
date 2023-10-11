def students_credits(*courses):
    diyan_credits = {}
    total_credits = 0

    for course in courses:
        course_name, credits, max_points, diyan_points = course.split("-")
        credits = float(credits)
        max_points = float(max_points)
        diyan_points = float(diyan_points)

        # Calculate the credits Diyan gets for this course
        earned_credits = (diyan_points / max_points) * credits
        total_credits += earned_credits
        diyan_credits[course_name] = earned_credits

    # Sort courses by Diyan's credits in descending order
    sorted_courses = sorted(diyan_credits.items(), key=lambda x: x[1], reverse=True)

    # Prepare the output message
    output = []

    if total_credits >= 240:
        output.append(f"Diyan gets a diploma with {total_credits:.1f} credits.")
    else:
        output.append(
            f"Diyan needs {240 - total_credits:.1f} credits more for a diploma."
        )

    for course_name, earned_credits in sorted_courses:
        output.append(f"{course_name} - {earned_credits:.1f}")

    return "\n".join(output)


print(
    students_credits(
        "Computer Science-12-300-250",
        "Basic Algebra-15-400-200",
        "Algorithms-25-500-490",
    )
)
print(
    students_credits(
        "Discrete Maths-40-500-450",
        "AI Development-20-400-400",
        "Algorithms Advanced-50-700-630",
        "Python Development-15-200-200",
        "JavaScript Development-12-500-480",
        "C++ Development-30-500-405",
        "Game Engine Development-70-100-70",
        "Mobile Development-25-250-225",
        "QA-20-300-300",
    )
)
print(
    students_credits(
        "Python Development-15-200-200",
        "JavaScript Development-12-500-480",
        "C++ Development-30-500-405",
        "Java Development-10-300-150",
    )
)
