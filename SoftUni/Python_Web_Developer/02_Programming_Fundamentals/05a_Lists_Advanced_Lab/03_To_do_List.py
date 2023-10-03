command = input()

todo_list = [0] * 10

while command != "End":
    importance, task = command.split("-")
    importance = int(importance) - 1
    todo_list[importance] = task
    command = input()

print([task for task in todo_list if task != 0])
