function signCheck(numOne, numTwo, numThree) {
  const product = numOne * numTwo * numThree;
  return product >= 0 ? "Positive" : "Negative";
}

// Test Cases
console.log(checkSign(5, 12, -15)); // Output: Negative
console.log(checkSign(-6, -12, 14)); // Output: Positive
console.log(checkSign(-1, -2, -3)); // Output: Negative
console.log(checkSign(-5, 1, 1)); // Output: Negative
