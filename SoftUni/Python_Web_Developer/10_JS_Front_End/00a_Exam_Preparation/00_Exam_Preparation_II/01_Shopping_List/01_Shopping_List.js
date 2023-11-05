function manageGroceryList(inputArray) {
  let groceries = inputArray.shift().split("!");

  inputArray.forEach((commandLine) => {
    if (commandLine === "Go Shopping!") {
      // If the command is "Go Shopping!", then stop processing further.
      return;
    }

    const [command, item, newItem] = commandLine.split(" ");

    switch (command) {
      case "Urgent":
        if (!groceries.includes(item)) {
          groceries.unshift(item);
        }
        break;
      case "Unnecessary":
        groceries = groceries.filter((grocery) => grocery !== item);
        break;
      case "Correct":
        const index = groceries.indexOf(item);
        if (index !== -1) {
          groceries[index] = newItem;
        }
        break;
      case "Rearrange":
        if (groceries.includes(item)) {
          groceries = groceries.filter((grocery) => grocery !== item);
          groceries.push(item);
        }
        break;
      // No default case needed, unrecognized commands are ignored
    }
  });

  return groceries.join(", ");
}

// Example usage:
const input1 = [
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
];
console.log(manageGroceryList(input1));

const input2 = [
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
];
console.log(manageGroceryList(input2));
