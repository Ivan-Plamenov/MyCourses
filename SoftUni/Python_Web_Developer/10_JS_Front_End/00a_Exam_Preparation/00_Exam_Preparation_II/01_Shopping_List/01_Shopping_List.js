function groceryList(input) {
  const groceries = input.shift().split("!");

  for (const command of input) {
    const [action, ...args] = command.split(" ");

    switch (action) {
      case "Urgent":
        const newItem = args[0];
        if (!groceries.includes(newItem)) {
          groceries.unshift(newItem);
        }
        break;
      case "Unnecessary":
        const itemToRemove = args[0];
        const indexToRemove = groceries.indexOf(itemToRemove);
        if (indexToRemove !== -1) {
          groceries.splice(indexToRemove, 1);
        }
        break;
      case "Correct":
        const oldItem = args[0];
        const newItemName = args[1];
        const indexToCorrect = groceries.indexOf(oldItem);
        if (indexToCorrect !== -1) {
          groceries[indexToCorrect] = newItemName;
        }
        break;
      case "Rearrange":
        const itemToMove = args[0];
        const indexToMove = groceries.indexOf(itemToMove);
        if (indexToMove !== -1) {
          groceries.splice(indexToMove, 1);
          groceries.push(itemToMove);
        }
        break;
      case "Go":
        if (args[0] === "Shopping!") {
          return groceries.join(", ");
        }
        break;
    }
  }
}
