function manageSprint(data) {
  const n = parseInt(data[0]);
  const sprintBoard = {};

  for (let i = 1; i <= n; i++) {
    const [assignee, taskId, title, status, estimatedPointsStr] =
      data[i].split(":");
    const estimatedPoints = parseInt(estimatedPointsStr);

    if (!sprintBoard[assignee]) {
      sprintBoard[assignee] = [];
    }

    sprintBoard[assignee].push({
      taskId,
      title,
      status,
      estimatedPoints,
    });
  }

  for (let i = n + 1; i < data.length; i++) {
    const command = data[i].split(":");
    const action = command[0];

    if (action === "Add New") {
      const [_, assignee, taskId, title, status, estimatedPointsStr] = command;
      const estimatedPoints = parseInt(estimatedPointsStr);

      if (!sprintBoard[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      } else {
        sprintBoard[assignee].push({
          taskId,
          title,
          status,
          estimatedPoints,
        });
      }
    } else if (action === "Change Status") {
      const [_, assignee, taskId, newStatus] = command;

      if (!sprintBoard[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        continue;
      }

      const task = sprintBoard[assignee].find((task) => task.taskId === taskId);
      if (!task) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      } else {
        task.status = newStatus;
      }
    } else if (action === "Remove Task") {
      const [_, assignee, indexStr] = command;
      const index = parseInt(indexStr);

      if (!sprintBoard[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        continue;
      }

      if (index < 0 || index >= sprintBoard[assignee].length) {
        console.log("Index is out of range!");
      } else {
        sprintBoard[assignee].splice(index, 1);
      }
    }
  }

  const statuses = { ToDo: 0, "In Progress": 0, "Code Review": 0, Done: 0 };

  for (const assignee in sprintBoard) {
    for (const task of sprintBoard[assignee]) {
      statuses[task.status] += task.estimatedPoints;
    }
  }

  console.log(`ToDo: ${statuses["ToDo"]}pts`);
  console.log(`In Progress: ${statuses["In Progress"]}pts`);
  console.log(`Code Review: ${statuses["Code Review"]}pts`);
  console.log(`Done Points: ${statuses["Done"]}pts`);

  if (
    statuses["Done"] >=
    statuses["ToDo"] + statuses["In Progress"] + statuses["Code Review"]
  ) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}
