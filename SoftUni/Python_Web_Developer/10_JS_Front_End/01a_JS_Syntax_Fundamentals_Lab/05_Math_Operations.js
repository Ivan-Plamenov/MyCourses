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
