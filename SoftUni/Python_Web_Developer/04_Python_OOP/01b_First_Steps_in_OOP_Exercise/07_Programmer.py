class Programmer:
    def __init__(self, name, language, skills):
        self.name = name
        self.language = language
        self.skills = skills

    def watch_course(self, course_name, language, skills_earned):
        if self.language == language:
            self.skills += skills_earned
            return f"{self.name} watched {course_name}"
        else:
            return f"{self.name} does not know {language}"

    def change_language(self, new_language, skills_needed):
        if self.language == new_language:
            return f"{self.name} already knows {new_language}"
        elif self.skills >= skills_needed:
            previous_language = self.language
            self.language = new_language
            return f"{self.name} switched from {previous_language} to {new_language}"
        else:
            needed_skills = skills_needed - self.skills
            return f"{self.name} needs {needed_skills} more skills"


# Test the class
programmer = Programmer("John", "Java", 50)
print(
    programmer.watch_course("Python Masterclass", "Python", 84)
)  # Output: John does not know Python
print(programmer.change_language("Java", 30))  # Output: John already knows Java
print(programmer.change_language("Python", 100))  # Output: John needs 50 more skills
print(
    programmer.watch_course("Java: zero to hero", "Java", 50)
)  # Output: John watched Java: zero to hero
print(
    programmer.change_language("Python", 100)
)  # Output: John switched from Java to Python
print(
    programmer.watch_course("Python Masterclass", "Python", 84)
)  # Output: John watched Python Masterclass
