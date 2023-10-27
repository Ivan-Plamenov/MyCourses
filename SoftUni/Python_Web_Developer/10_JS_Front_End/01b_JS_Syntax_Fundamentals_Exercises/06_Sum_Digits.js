function sumDigits(number) {
  let sum = 0;

  // Convert the number to a string to iterate through its digits
  const numberString = number.toString();

  // Iterate through each digit and add it to the sum
  for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString[i]);
  }

  return sum;
}

// Test Cases
console.log(sumDigits(245678)); // Output: 32
console.log(sumDigits(97561)); // Output: 28
console.log(sumDigits(543)); // Output: 12
