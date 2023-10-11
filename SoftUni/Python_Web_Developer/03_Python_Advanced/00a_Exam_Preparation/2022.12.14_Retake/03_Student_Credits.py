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
