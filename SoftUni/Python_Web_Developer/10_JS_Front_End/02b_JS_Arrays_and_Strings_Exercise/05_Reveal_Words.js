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
