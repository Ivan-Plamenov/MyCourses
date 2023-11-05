function sprintReview(input) {
  const numberOfTasks = parseInt(input[0], 10);
  const tasks = {};
  let totalPoints = {
    ToDo: 0,
    "In Progress": 0,
    "Code Review": 0,
    Done: 0,
  };

  // Parse initial tasks
  for (let i = 1; i <= numberOfTasks; i++) {
    const [assignee, taskId, title, status, estimatedPoints] =
      input[i].split(":");
    if (!tasks[assignee]) {
      tasks[assignee] = [];
    }
    tasks[assignee].push({
      taskId,
      title,
      status,
      estimatedPoints: parseInt(estimatedPoints, 10),
    });
    totalPoints[status] += parseInt(estimatedPoints, 10);
  }

  // Process commands
  for (let i = numberOfTasks + 1; i < input.length; i++) {
    const [command, assignee, arg1, arg2, arg3, arg4] = input[i].split(":");

    switch (command) {
      case "Add New":
        if (!tasks[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          tasks[assignee].push({
            taskId: arg1,
            title: arg2,
            status: arg3,
            estimatedPoints: parseInt(arg4, 10),
          });
          totalPoints[arg3] += parseInt(arg4, 10);
        }
        break;

      case "Change Status":
        if (!tasks[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          let task = tasks[assignee].find((task) => task.taskId === arg1);
          if (!task) {
            console.log(`Task with ID ${arg1} does not exist for ${assignee}!`);
          } else {
            totalPoints[task.status] -= task.estimatedPoints;
            task.status = arg2;
            totalPoints[arg2] += task.estimatedPoints;
          }
        }
        break;

      case "Remove Task":
        const index = parseInt(arg1, 10);
        if (!tasks[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (index < 0 || index >= tasks[assignee].length) {
          console.log(`Index is out of range!`);
        } else {
          let task = tasks[assignee][index];
          totalPoints[task.status] -= task.estimatedPoints;
          tasks[assignee].splice(index, 1);
        }
        break;
    }
  }

  // Print total points
  console.log(`ToDo: ${totalPoints["ToDo"]}pts`);
  console.log(`In Progress: ${totalPoints["In Progress"]}pts`);
  console.log(`Code Review: ${totalPoints["Code Review"]}pts`);
  console.log(`Done Points: ${totalPoints["Done"]}pts`);

  // Determine if the sprint was successful
  const successful =
    totalPoints["Done"] >=
    totalPoints["ToDo"] +
      totalPoints["In Progress"] +
      totalPoints["Code Review"];
  console.log(
    successful ? "Sprint was successful!" : "Sprint was unsuccessful..."
  );
}
