function sameNumbers(number) {
  const numberString = number.toString();
  const firstDigit = numberString[0];
  let areAllDigitsSame = true;
  let sumOfDigits = 0;

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    sumOfDigits += parseInt(digit);

    if (digit !== firstDigit) {
      areAllDigitsSame = false;
    }
  }

  console.log(areAllDigitsSame);
  console.log(sumOfDigits);
}

// Test Cases
sameNumbers(2222222);
// Output:
// true
// 14

sameNumbers(1234);
// Output:
// false
// 10
