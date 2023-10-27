function cookingByNumbers(startingNumber, operations) {
  let currentNumber = Number(startingNumber);

  for (let operation of operations) {
    if (operation === "chop") {
      currentNumber /= 2;
    } else if (operation === "dice") {
      currentNumber = Math.sqrt(currentNumber);
    } else if (operation === "spice") {
      currentNumber += 1;
    } else if (operation === "bake") {
      currentNumber *= 3;
    } else if (operation === "fillet") {
      currentNumber -= currentNumber * 0.2;
    }
    console.log(currentNumber);
  }
}

// Test Cases
cookingByNumbers("32", ["chop", "chop", "chop", "chop", "chop"]);
// Output:
// 16
// 8
// 4
// 2
// 1

cookingByNumbers("9", ["dice", "spice", "chop", "bake", "fillet"]);
// Output:
// 3
// 4
// 2
// 6
// 4.8
