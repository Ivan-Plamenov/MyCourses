function jansNotation(input) {
  let stack = [];

  for (let element of input) {
    if (typeof element === "number") {
      stack.push(element);
    } else {
      if (stack.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }

      let secondOperand = stack.pop();
      let firstOperand = stack.pop();

      switch (element) {
        case "+":
          stack.push(firstOperand + secondOperand);
          break;
        case "-":
          stack.push(firstOperand - secondOperand);
          break;
        case "*":
          stack.push(firstOperand * secondOperand);
          break;
        case "/":
          stack.push(firstOperand / secondOperand);
          break;
      }
    }
  }

  if (stack.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(stack[0]);
  }
}
