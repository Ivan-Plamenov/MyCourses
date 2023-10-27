function substringFromString(str, startIndex, count) {
  const result = str.substr(startIndex, count);
  console.log(result);
}

// Test Cases
substringFromString("ASentence", 1, 8); // Output: Sentence
substringFromString("SkipWord", 4, 7); // Output: Word
