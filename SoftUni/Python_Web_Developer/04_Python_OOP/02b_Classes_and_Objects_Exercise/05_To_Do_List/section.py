from project.task import Task


class Section:
    def __init__(self, _name: str) -> None:
        self.name = _name
        self.tasks = []

    def add_task(self, _new_task: Task):
        for task in self.tasks:
            if _new_task.name == task.name:
                return f"Task is already in the section {self.name}"
        self.tasks.append(_new_task)
        return f"Task {_new_task.details()} is added to the section"

    def complete_task(self, _task_name: str):
        for task in self.tasks:
            if _task_name == task.name:
                task.completed = True
                return f"Completed task {task.name}"
        return f"Could not find task with the name {_task_name}"

    def clean_section(self):
        count = 0
        for index, value in enumerate(self.tasks):
            if value.completed is True:
                count += 1
                self.tasks.pop(index)
        return f"Cleared {count} tasks."

    def view_section(self):
        new_line = "\n"
        return (
            f"Section {self.name}:\n"
            f"{new_line.join(task.details() for task in self.tasks)}"
        )
