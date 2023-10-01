function foodDelivery(input) {
  let chickenMenus = Number(input[0]);
  let fishMenus = Number(input[1]);
  let veggieMenus = Number(input[2]);

  chickenPrice = chickenMenus * 10.35;
  fishPrice = fishMenus * 12.4;
  veggiePrice = veggieMenus * 8.15;
  dessertPrice = (chickenPrice + fishPrice + veggiePrice) * 0.2;
  totalPrice = 2.5 + chickenPrice + fishPrice + veggiePrice + dessertPrice;

  console.log(totalPrice);
}
