function findLowestPrices(input) {
  let products = {};

  for (let data of input) {
    let [town, product, price] = data.split(" | ");
    price = Number(price);

    if (!products[product]) {
      products[product] = { price, town };
    } else {
      if (products[product].price > price) {
        products[product].price = price;
        products[product].town = town;
      }
    }
  }

  for (let product in products) {
    console.log(
      `${product} -> ${products[product].price} (${products[product].town})`
    );
  }
}
