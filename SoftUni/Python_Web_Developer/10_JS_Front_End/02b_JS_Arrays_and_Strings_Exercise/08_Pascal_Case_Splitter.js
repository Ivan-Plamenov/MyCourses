function splitPascalCase(inputString) {
  // Use a regular expression to split the string at uppercase letters
  const wordsArray = inputString.split(/(?=[A-Z])/);

  // Join the words with a comma and space
  const resultString = wordsArray.join(", ");

  return resultString;
}
