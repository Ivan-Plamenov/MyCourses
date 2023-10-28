function oddAndEvenSum(number) {
  let numberString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numberString.length; i++) {
    let digit = Number(numberString[i]);

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
