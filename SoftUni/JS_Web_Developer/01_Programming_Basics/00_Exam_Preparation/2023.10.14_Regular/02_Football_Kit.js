// 100/100
function calculateBallWinning(input) {
  const priceOfJersey = parseFloat(input[0]);
  const amountToWinBall = parseFloat(input[1]);

  // Calculate the prices of shorts, socks, and buttons based on given percentages and formulas
  const priceOfShorts = priceOfJersey * 0.75;
  const priceOfSocks = priceOfShorts * 0.2;
  const priceOfButtons = (priceOfJersey + priceOfShorts) * 2;

  // Calculate the total purchase price before discount
  const totalPriceBeforeDiscount =
    priceOfJersey + priceOfShorts + priceOfSocks + priceOfButtons;

  // Calculate the discount amount
  const discount = totalPriceBeforeDiscount * 0.15;

  // Calculate the total purchase price after discount
  const totalPriceAfterDiscount = totalPriceBeforeDiscount - discount;

  if (totalPriceAfterDiscount >= amountToWinBall) {
    return `Yes, he will earn the world-cup replica ball!\nHis sum is ${totalPriceAfterDiscount.toFixed(
      2
    )} lv.`;
  } else {
    const neededMoney = (amountToWinBall - totalPriceAfterDiscount).toFixed(2);
    return `No, he will not earn the world-cup replica ball.\nHe needs ${neededMoney} lv. more.`;
  }
}

// Test the function with the given input
const result = calculateBallWinning(["25", "100"]);
console.log(result);

const result2 = calculateBallWinning(["55", "310"]);
console.log(result2);

const result3 = calculateBallWinning(["59.99", "500"]);
console.log(result3);
