function calculator(num1, operator, num2) {
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
        console.log("Cannot divide by zero.");
        return;
      }
      break;
    default:
      console.log("Invalid operator.");
      return;
  }

  console.log(result.toFixed(2));
}

// Test Cases
calculator(5, "+", 10); // Output: 15.00
calculator(25.5, "-", 3); // Output: 22.50
