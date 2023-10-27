function revealWords(words, text) {
  // Split the words and text into arrays
  const wordsArray = words.split(", ");
  const textArray = text.split(" ");

  // Iterate through the wordsArray and textArray
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    const template = "*".repeat(word.length);

    // Replace the template with the word in the textArray
    const wordIndex = textArray.indexOf(template);
    if (wordIndex !== -1) {
      textArray[wordIndex] = word;
    }
  }

  // Join the modified textArray back into a single string
  const result = textArray.join(" ");

  return result;
}

// Test Cases
const words = "great";
const text1 = "softuni is ***** place for learning new programming languages";
const text2 = "softuni is great place for ******** new programming languages";

console.log(revealWords(words, text1));
console.log(revealWords(words, text2));
