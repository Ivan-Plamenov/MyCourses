function newHouse(input) {
  let flowerType = input[0];
  let flowerAmount = Number(input[1]);
  let budget = Number(input[2]);
  let totalPrice = 0;
  let price = 0;

  switch (flowerType) {
    case `Roses`:
      price += 5;
      break;
    case `Dahlias`:
      price += 3.8;
      break;
    case `Tulips`:
      price += 2.8;
      break;
    case `Narcissus`:
      price += 3;
      break;
    case `Gladiolus`:
      price += 2.5;
      break;

    default:
      break;
  }

  totalPrice = flowerAmount * price;

  switch (flowerType) {
    case `Roses`:
      if (flowerAmount > 80) {
        totalPrice -= totalPrice * 0.1;
      }
      break;
    case `Dahlias`:
      if (flowerAmount > 90) {
        totalPrice -= totalPrice * 0.15;
      }
      break;
    case `Tulips`:
      if (flowerAmount > 80) {
        totalPrice -= totalPrice * 0.15;
      }
      break;
    case `Narcissus`:
      if (flowerAmount < 120) {
        totalPrice += totalPrice * 0.15;
      }
      break;
    case `Gladiolus`:
      if (flowerAmount < 80) {
        totalPrice += totalPrice * 0.2;
      }
      break;

    default:
      break;
  }

  if (totalPrice <= budget) {
    let moneyLeft = Math.abs(totalPrice - budget);
    console.log(
      `Hey, you have a great garden with ${flowerAmount} ${flowerType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyRequired = Math.abs(totalPrice - budget);
    console.log(
      `Not enough money, you need ${moneyRequired.toFixed(2)} leva more.`
    );
  }
}
