function findWordInText(word, text) {
  // Convert both the word and text to lowercase for case-insensitive comparison
  const lowercaseWord = word.toLowerCase();
  const lowercaseText = text.toLowerCase();

  // Check if the lowercase text contains the lowercase word
  if (lowercaseText.includes(lowercaseWord)) {
    return lowercaseWord;
  } else {
    return `${word} not found!`;
  }
}

// Test Cases
const word1 = "javascript";
const text1 = "JavaScript is the best programming language";
console.log(findWordInText(word1, text1));

const word2 = "python";
const text2 = "JavaScript is the best programming language";
console.log(findWordInText(word2, text2));
