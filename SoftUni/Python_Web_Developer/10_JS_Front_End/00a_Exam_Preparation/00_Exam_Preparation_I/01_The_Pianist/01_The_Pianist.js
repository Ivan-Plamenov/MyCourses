function managePianoCollection(inputCommands) {
  const collection = new Map();

  // Helper function to print all pieces
  function printCollection() {
    collection.forEach((value, key) => {
      console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
    });
  }

  // Processing the initial collection
  const initialPiecesCount = parseInt(inputCommands.shift(), 10);
  for (let i = 0; i < initialPiecesCount; i++) {
    const [piece, composer, key] = inputCommands.shift().split("|");
    collection.set(piece, { composer, key });
  }

  // Processing the commands
  for (const command of inputCommands) {
    if (command === "Stop") {
      break;
    }

    const [action, piece, composerOrKey, key] = command.split("|");

    switch (action) {
      case "Add":
        if (collection.has(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          collection.set(piece, { composer: composerOrKey, key });
          console.log(
            `${piece} by ${composerOrKey} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        if (collection.has(piece)) {
          collection.delete(piece);
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        if (collection.has(piece)) {
          const composer = collection.get(piece).composer;
          collection.set(piece, { composer, key: composerOrKey });
          console.log(`Changed the key of ${piece} to ${composerOrKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
    }
  }

  // Printing the final collection
  printCollection();
}
