function findSpecialWords(input) {
  // Split the input string into words
  const words = input.split(" ");

  // Create an array to store valid special words
  const specialWords = [];

  // Iterate through the words
  for (const word of words) {
    // Check if the word starts with '#' and contains only letters
    if (word.startsWith("#") && /^[a-zA-Z]+$/.test(word.substring(1))) {
      // Remove the '#' and push the valid special word to the array
      specialWords.push(word.substring(1));
    }
  }

  // Join the special words into a single string with new lines
  const result = specialWords.join("\n");

  return result;
}

// Test Cases
const input1 =
  "Nowadays everyone uses # to tag a #special word in #socialMedia";
const input2 =
  "The symbol # is known #variously in English-speaking #regions as the #number sign";

console.log(findSpecialWords(input1));
console.log(findSpecialWords(input2));
