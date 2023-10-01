function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let numberOfActors = Number(input[1]);
  let priceOfClothing = Number(input[2]);

  priceOfStage = movieBudget * 0.1;
  totalPriceOfClothing = numberOfActors * priceOfClothing;

  if (numberOfActors >= 150) {
    discount = totalPriceOfClothing * 0.1;
    totalPriceOfClothing -= discount;
  }

  totalPriceOfMoive = priceOfStage + totalPriceOfClothing;
  moneyAbsolute = Math.abs(movieBudget - totalPriceOfMoive).toFixed(2);

  if (movieBudget >= totalPriceOfMoive) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${moneyAbsolute} leva left.`);
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyAbsolute} leva more.`);
  }
}
