function mathPower(number, power) {
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= number;
  }

  console.log(result);
}

// Test Cases
mathPower(2, 8); // Output: 256
mathPower(3, 4); // Output: 81
