function countStringOccurrences(text, word) {
  const words = text.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }

  console.log(count);
}

// Test Cases
countStringOccurrences("This is a word and it also is a sentence", "is"); // Output: 2
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
); // Output: 1
