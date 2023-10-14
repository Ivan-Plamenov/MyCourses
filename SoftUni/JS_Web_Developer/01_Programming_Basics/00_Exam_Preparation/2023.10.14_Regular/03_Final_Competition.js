// 100/100
function calculatePrize(input) {
  const numberOfDancers = parseInt(input[0]);
  const points = parseFloat(input[1]);
  const season = input[2];
  const place = input[3];

  let prizeMoney = 0;
  if (place === "Bulgaria") {
    prizeMoney = numberOfDancers * points;
    let expenses = 0;

    if (season === "summer") {
      expenses = prizeMoney * 0.05;
    } else if (season === "winter") {
      expenses = prizeMoney * 0.08;
    }

    prizeMoney -= expenses;
  } else if (place === "Abroad") {
    prizeMoney = numberOfDancers * points + 0.5 * numberOfDancers * points;
    let expenses = 0;

    if (season === "summer") {
      expenses = prizeMoney * 0.1;
    } else if (season === "winter") {
      expenses = prizeMoney * 0.15;
    }

    prizeMoney -= expenses;
  }

  const moneyForCharity = 0.75 * prizeMoney;
  const remainingMoney = prizeMoney - moneyForCharity;

  const moneyPerDancer = remainingMoney / numberOfDancers;

  return `Charity - ${moneyForCharity.toFixed(
    2
  )}\nMoney per dancer - ${moneyPerDancer.toFixed(2)}`;
}

// Test the function with the given input
const result = calculatePrize(["1", "89.5", "summer", "Abroad"]);
console.log(result);

const result2 = calculatePrize(["25", "98", "winter", "Bulgaria"]);
console.log(result2);
