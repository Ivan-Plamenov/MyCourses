function organizePianoCollection(input) {
  let collection = new Map();

  // Parse the initial pieces
  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = input[i].split("|");
    collection.set(piece, { composer, key });
  }

  // Process the commands
  for (let i = n; i < input.length; i++) {
    let [command, ...args] = input[i].split("|");

    if (command === "Add") {
      let [piece, composer, key] = args;
      if (!collection.has(piece)) {
        collection.set(piece, { composer, key });
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (command === "Remove") {
      let piece = args[0];
      if (collection.has(piece)) {
        collection.delete(piece);
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let [piece, newKey] = args;
      if (collection.has(piece)) {
        let { composer } = collection.get(piece);
        collection.set(piece, { composer, key: newKey });
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "Stop") {
      break;
    }
  }

  // Print the final collection
  for (let [piece, { composer, key }] of collection) {
    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
  }
}
