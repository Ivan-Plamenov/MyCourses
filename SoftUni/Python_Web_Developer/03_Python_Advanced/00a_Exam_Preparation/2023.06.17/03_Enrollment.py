def gather_credits(needed_credits, *courses_data):
    enrolled_courses = set()
    gathered_credits = 0

    for course_name, course_credits in courses_data:
        if gathered_credits >= needed_credits:
            break

        if course_name not in enrolled_courses:
            enrolled_courses.add(course_name)
            gathered_credits += course_credits

    if gathered_credits >= needed_credits:
        enrolled_courses = sorted(enrolled_courses)
        return f"Enrollment finished! Maximum credits: {gathered_credits}.\nCourses: {', '.join(enrolled_courses)}"
    else:
        credits_shortage = needed_credits - gathered_credits
        return f"You need to enroll in more courses! You have to gather {credits_shortage} credits more."
