function reversedChars(char1, char2, char3) {
  const result = char3 + " " + char2 + " " + char1;
  console.log(result);
}

// Test Cases
reversedChars("A", "B", "C"); // Output: C B A
reversedChars("1", "L", "&"); // Output: & L 1
