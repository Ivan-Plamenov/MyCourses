function yardGreening(input) {
  let squareMeters = Number(input[0]);
  priceStart = squareMeters * 7.61;
  priceDiscount = priceStart * 0.18;
  priceFinal = priceStart - priceDiscount;
  console.log(`The final price is: ${priceFinal} lv.`);
  console.log(`The discount is: ${priceDiscount} lv.`);
}
