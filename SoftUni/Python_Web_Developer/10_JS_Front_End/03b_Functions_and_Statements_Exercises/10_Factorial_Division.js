function factorialDivision(firstNum, secondNum) {
  function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }

  const firstFactorial = calculateFactorial(firstNum);
  const secondFactorial = calculateFactorial(secondNum);
  const divisionResult = (firstFactorial / secondFactorial).toFixed(2);
  console.log(divisionResult);
}
