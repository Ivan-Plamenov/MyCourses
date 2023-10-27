function printSortedNames(names) {
  // Sort the names alphabetically in ascending order
  const sortedNames = names.sort();

  // Iterate through the sorted names and print them with numbers
  for (let i = 0; i < sortedNames.length; i++) {
    console.log(`${i + 1}.${sortedNames[i]}`);
  }
}

// Test Cases
const namesArray = ["John", "Bob", "Christina", "Ema"];
printSortedNames(namesArray);
