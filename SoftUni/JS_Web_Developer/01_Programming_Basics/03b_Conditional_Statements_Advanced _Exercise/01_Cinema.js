function cinema(input) {
  let screeningType = input[0];
  let numberOfRows = Number(input[1]);
  let numberOfCols = Number(input[2]);
  let pricerPerTicket = 0;

  if (screeningType === "Premiere") {
    pricerPerTicket = 12.0;
  } else if (screeningType === "Normal") {
    pricerPerTicket = 7.5;
  } else {
    pricerPerTicket = 5.0;
  }

  income = (numberOfRows * numberOfCols * pricerPerTicket).toFixed(2);
  console.log(`${income} leva`);
}
