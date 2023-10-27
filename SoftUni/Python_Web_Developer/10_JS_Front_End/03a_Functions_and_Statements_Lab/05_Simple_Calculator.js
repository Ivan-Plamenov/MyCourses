function calculator(numOne, numTwo, operator) {
  switch (operator) {
    case "multiply":
      return numOne * numTwo;
    case "divide":
      return numOne / numTwo;
    case "add":
      return numOne + numTwo;
    case "subtract":
      return numOne - numTwo;
    default:
      return "Invalid operator";
  }
}

// Test Cases
console.log(calculator(5, 5, "multiply")); // Output: 25
console.log(calculator(40, 8, "divide")); // Output: 5
console.log(calculator(12, 19, "add")); // Output: 31
console.log(calculator(50, 13, "subtract")); // Output: 37
console.log(calculator(10, 0, "divide")); // Output: Infinity (for division by zero)
console.log(calculator(10, 0, "invalidOperator")); // Output: Invalid operator
