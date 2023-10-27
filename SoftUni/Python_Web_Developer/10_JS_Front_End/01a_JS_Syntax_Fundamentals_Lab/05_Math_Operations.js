function performMathOperation(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Error: Division by zero.");
        return;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      console.log("Error: Invalid operator.");
      return;
  }

  console.log(result);
}

// Test Cases
performMathOperation(5, 6, "+"); // Output: 11
performMathOperation(3, 5.5, "*"); // Output: 16.5
performMathOperation(8, 0, "/"); // Output: Error: Division by zero.
performMathOperation(4, 3, "$"); // Output: Error: Invalid operator.
