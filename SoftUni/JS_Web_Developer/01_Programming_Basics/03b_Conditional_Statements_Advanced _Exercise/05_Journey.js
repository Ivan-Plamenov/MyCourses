function destinationCost(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let vacationPlace = ``;
  let sleepPlace = ``;
  let moneySpent = 0;

  if (budget <= 100) {
    vacationPlace = `Bulgaria`;
    if (season === `summer`) {
      sleepPlace = `Camp`;
      moneySpent = budget * 0.3;
    } else {
      sleepPlace = `Hotel`;
      moneySpent = budget * 0.7;
    }
  } else if (budget <= 1000) {
    vacationPlace = `Balkans`;
    if (season === `summer`) {
      sleepPlace = `Camp`;
      moneySpent = budget * 0.4;
    } else {
      sleepPlace = `Hotel`;
      moneySpent = budget * 0.8;
    }
  } else if (budget > 1000) {
    vacationPlace = `Europe`;
    sleepPlace = `Hotel`;
    moneySpent = budget * 0.9;
  }
  console.log(`Somewhere in ${vacationPlace}`);
  console.log(`${sleepPlace} - ${moneySpent.toFixed(2)}`);
}
