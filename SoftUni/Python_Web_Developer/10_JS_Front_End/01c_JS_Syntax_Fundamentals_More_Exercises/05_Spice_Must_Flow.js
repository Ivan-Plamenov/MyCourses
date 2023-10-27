function spiceMustFlow(startingYield) {
  let days = 0;
  let totalSpice = 0;

  while (startingYield >= 100) {
    totalSpice += startingYield - 26;
    startingYield -= 10;
    days++;
  }

  if (totalSpice >= 26) {
    totalSpice -= 26;
  }

  console.log(days);
  console.log(totalSpice);
}

// Test Cases
spiceMustFlow(111);
// Output:
// 2
// 134

spiceMustFlow(450);
// Output:
// 36
// 8938
