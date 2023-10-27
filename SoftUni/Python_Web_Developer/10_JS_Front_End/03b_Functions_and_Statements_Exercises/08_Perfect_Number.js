function isPerfectNumber(number) {
  let sum = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number && sum !== 0) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

// Test Cases
isPerfectNumber(6); // We have a perfect number!
isPerfectNumber(28); // We have a perfect number!
isPerfectNumber(1236498); // It's not so perfect.
