function censorWord(text, word) {
  const censor = "*".repeat(word.length);
  const regex = new RegExp(word, "gi");
  const result = text.replace(regex, censor);
  console.log(result);
}

// Test Cases
censorWord("A small sentence with some words", "small"); // Output: A ***** sentence with some words
censorWord("Find the hidden word", "hidden"); // Output: Find the ****** word
