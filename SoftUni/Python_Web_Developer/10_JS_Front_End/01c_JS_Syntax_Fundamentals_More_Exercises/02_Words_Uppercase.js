function wordsToUppercase(inputString) {
  const words = inputString.match(/\b\w+\b/g); // Use a regular expression to extract words
  if (words) {
    const uppercaseWords = words.map((word) => word.toUpperCase()); // Convert words to uppercase
    const result = uppercaseWords.join(", "); // Join the uppercase words with ", "
    console.log(result);
  }
}

// Test Cases
wordsToUppercase("Hi, how are you?"); // Output: HI, HOW, ARE, YOU
wordsToUppercase("hello"); // Output: HELLO
