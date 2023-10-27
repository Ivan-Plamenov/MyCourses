function repeatString(string, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += string;
  }

  return result;
}

// Test Cases
console.log(repeatString("abc", 3)); // Output: "abcabcabc"
console.log(repeatString("String", 2)); // Output: "StringString"
