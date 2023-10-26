class Task:
    comments = []
    completed = False

    def __init__(self, _name: str, _due_date: str) -> None:
        self.name = _name
        self.due_date = _due_date

    def change_name(self, _new_name: str):
        if _new_name != self.name:
            self.name = _new_name
            return self.name
        else:
            return "Name cannot be the same."

    def change_due_date(self, _new_date: str):
        if _new_date != self.due_date:
            self.due_date = _new_date
            return self.due_date
        else:
            return "Date cannot be the same."

    def add_comment(self, _comment: str):
        Task.comments.append(_comment)

    def edit_comment(self, _comment_num: int, _new_comment: str):
        if _comment_num >= len(Task.comments) or _comment_num < 0:
            return "Cannot find comment."
        else:
            del Task.comments[_comment_num]
            if len(Task.comments) > 0:
                Task.comments[_comment_num] = _new_comment
            else:
                Task.comments.append(_new_comment)
            return ", ".join(Task.comments)

    def details(self):
        return f"Name: {self.name} - Due Date: {self.due_date}"
