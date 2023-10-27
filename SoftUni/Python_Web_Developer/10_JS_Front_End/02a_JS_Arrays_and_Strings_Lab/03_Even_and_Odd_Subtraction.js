function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let number of arr) {
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }

  const difference = evenSum - oddSum;
  console.log(difference);
}

// Test Cases
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]); // Output: 3
evenAndOddSubtraction([3, 5, 7, 9]); // Output: -24
evenAndOddSubtraction([2, 4, 6, 8, 10]); // Output: 30
