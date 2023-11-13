function calculateSprintStatus(input) {
  let n = Number(input.shift());
  let assignees = new Map();

  // Initialize task totals for each status
  let todoTotal = 0;
  let inProgressTotal = 0;
  let codeReviewTotal = 0;
  let doneTotal = 0;

  // Populate initial task data
  for (let i = 0; i < n; i++) {
    let [assignee, taskId, title, status, estimatedPoints] =
      input[i].split(":");
    estimatedPoints = Number(estimatedPoints);

    if (!assignees.has(assignee)) {
      assignees.set(assignee, []);
    }

    assignees.get(assignee).push({ taskId, title, status, estimatedPoints });
  }

  // Process commands
  for (let i = n; i < input.length; i++) {
    let [command, ...args] = input[i].split(":");
    let assignee = args.shift();

    if (!assignees.has(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
      continue;
    }

    if (command === "Add New") {
      let [taskId, title, status, estimatedPoints] = args;
      estimatedPoints = Number(estimatedPoints);
      assignees.get(assignee).push({ taskId, title, status, estimatedPoints });
    } else if (command === "Change Status") {
      let taskId = args[0];
      let newStatus = args[1];
      let taskIndex = assignees
        .get(assignee)
        .findIndex((task) => task.taskId === taskId);

      if (taskIndex === -1) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        continue;
      }

      assignees.get(assignee)[taskIndex].status = newStatus;
    } else if (command === "Remove Task") {
      let index = Number(args[0]);

      if (index < 0 || index >= assignees.get(assignee).length) {
        console.log("Index is out of range!");
        continue;
      }

      assignees.get(assignee).splice(index, 1);
    }
  }

  // Calculate task totals for each status
  for (let tasks of assignees.values()) {
    for (let task of tasks) {
      if (task.status === "ToDo") {
        todoTotal += task.estimatedPoints;
      } else if (task.status === "In Progress") {
        inProgressTotal += task.estimatedPoints;
      } else if (task.status === "Code Review") {
        codeReviewTotal += task.estimatedPoints;
      } else if (task.status === "Done") {
        doneTotal += task.estimatedPoints;
      }
    }
  }

  // Check Sprint success
  let isSuccessful = doneTotal >= todoTotal + inProgressTotal + codeReviewTotal;

  // Print results
  console.log(`ToDo: ${todoTotal}pts`);
  console.log(`In Progress: ${inProgressTotal}pts`);
  console.log(`Code Review: ${codeReviewTotal}pts`);
  console.log(`Done Points: ${doneTotal}pts`);

  if (isSuccessful) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}
