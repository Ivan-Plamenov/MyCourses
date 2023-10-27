function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldCount = 0;
  let helmetCount = 0;
  let swordCount = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
      helmetCount++;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
      swordCount++;
    }
    if (i % 6 === 0) {
      expenses += shieldPrice;
      shieldCount++;
    }
    if (shieldCount === 2) {
      expenses += armorPrice;
      shieldCount = 0;
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// Test Cases
gladiatorExpenses(7, 2, 3, 4, 5);
// Output: Gladiator expenses: 16.00 aureus

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
// Output: Gladiator expenses: 608.00 aureus
