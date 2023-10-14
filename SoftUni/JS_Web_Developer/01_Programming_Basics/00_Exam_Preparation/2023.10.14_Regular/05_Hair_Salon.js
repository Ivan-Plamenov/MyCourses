// 100/100
function calculateProfitGoal(input) {
  const targetForTheDay = parseInt(input[0]);
  let earnedMoney = 0;

  for (let i = 1; i < input.length; i++) {
    const command = input[i];
    if (command === "closed") {
      break;
    }

    if (command === "haircut") {
      const haircutType = input[i + 1];
      switch (haircutType) {
        case "mens":
          earnedMoney += 15;
          break;
        case "ladies":
          earnedMoney += 20;
          break;
        case "kids":
          earnedMoney += 10;
          break;
      }
      i++;
    } else if (command === "color") {
      const colorType = input[i + 1];
      switch (colorType) {
        case "touch up":
          earnedMoney += 20;
          break;
        case "full color":
          earnedMoney += 30;
          break;
      }
      i++;
    }

    if (earnedMoney >= targetForTheDay) {
      break;
    }
  }

  if (earnedMoney >= targetForTheDay) {
    return `You have reached your target for the day!\nEarned money: ${earnedMoney}lv.`;
  } else {
    const moneyShort = targetForTheDay - earnedMoney;
    return `Target not reached! You need ${moneyShort}lv. more.\nEarned money: ${earnedMoney}lv.`;
  }
}

// Test the function with the given input
const result = calculateProfitGoal([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
console.log(result);

const result2 = calculateProfitGoal([
  "50",
  "color",
  "full color",
  "haircut",
  "ladies",
]);
console.log(result2);
