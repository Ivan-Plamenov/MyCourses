function splitPascalCase(inputString) {
  // Use a regular expression to split the string at uppercase letters
  const wordsArray = inputString.split(/(?=[A-Z])/);

  // Join the words with a comma and space
  const resultString = wordsArray.join(", ");

  return resultString;
}

// Test Cases
const input1 = "SplitMeIfYouCanHaHaYouCantOrYouCan";
console.log(splitPascalCase(input1));

const input2 = "HoldTheDoor";
console.log(splitPascalCase(input2));

const input3 = "ThisIsSoAnnoyingToDo";
console.log(splitPascalCase(input3));
