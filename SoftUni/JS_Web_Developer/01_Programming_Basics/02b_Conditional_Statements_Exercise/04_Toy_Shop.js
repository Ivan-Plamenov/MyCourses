function toyShop(input) {
  let priceOfExcursion = Number(input[0]);
  let amountOfPuzzles = Number(input[1]);
  let amountOfDolls = Number(input[2]);
  let amountOfTedyBears = Number(input[3]);
  let amountOfMinions = Number(input[4]);
  let amountOfTrucks = Number(input[5]);

  amountOfToys =
    amountOfPuzzles +
    amountOfDolls +
    amountOfTedyBears +
    amountOfMinions +
    amountOfTrucks;
  totalPriceOfToys =
    amountOfPuzzles * 2.6 +
    amountOfDolls * 3 +
    amountOfTedyBears * 4.1 +
    amountOfMinions * 8.2 +
    amountOfTrucks * 2;

  if (amountOfToys >= 50) {
    discount = totalPriceOfToys * 0.25;
    totalPriceOfToys -= discount;
    totalMoneyEarned = totalPriceOfToys - totalPriceOfToys * 0.1;
  } else {
    totalMoneyEarned = totalPriceOfToys - totalPriceOfToys * 0.1;
  }

  if (totalMoneyEarned >= priceOfExcursion) {
    moneyAbsolute = Math.abs(totalMoneyEarned - priceOfExcursion).toFixed(2);
    console.log(`Yes! ${moneyAbsolute} lv left.`);
  } else {
    moneyAbsolute = Math.abs(totalMoneyEarned - priceOfExcursion).toFixed(2);
    console.log(`Not enough money! ${moneyAbsolute} lv needed.`);
  }
}
