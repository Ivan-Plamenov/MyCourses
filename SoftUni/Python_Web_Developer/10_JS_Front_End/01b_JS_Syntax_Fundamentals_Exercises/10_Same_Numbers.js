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
