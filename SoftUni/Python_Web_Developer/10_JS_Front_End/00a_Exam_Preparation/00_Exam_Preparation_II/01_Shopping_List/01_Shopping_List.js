function groceryList(input) {
  let groceries = input.shift().split("!");

  for (let command of input) {
    let [action, ...args] = command.split(" ");
    let item = args.join(" ");

    if (action === "Urgent") {
      if (!groceries.includes(item)) {
        groceries.unshift(item);
      }
    } else if (action === "Unnecessary") {
      let index = groceries.indexOf(item);
      if (index !== -1) {
        groceries.splice(index, 1);
      }
    } else if (action === "Correct") {
      let [oldItem, newItem] = args;
      let index = groceries.indexOf(oldItem);
      if (index !== -1) {
        groceries[index] = newItem;
      }
    } else if (action === "Rearrange") {
      let index = groceries.indexOf(item);
      if (index !== -1) {
        groceries.splice(index, 1);
        groceries.push(item);
      }
    } else if (action === "Go") {
      break;
    }
  }

  console.log(groceries.join(", "));
}
