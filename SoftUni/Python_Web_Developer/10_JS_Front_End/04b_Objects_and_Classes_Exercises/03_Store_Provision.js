function updateStock(currentStock, orderedProducts) {
  const stock = {};

  // Process the current stock
  for (let i = 0; i < currentStock.length; i += 2) {
    const product = currentStock[i];
    const quantity = Number(currentStock[i + 1]);

    if (!stock.hasOwnProperty(product)) {
      stock[product] = quantity;
    } else {
      stock[product] += quantity;
    }
  }

  // Process the ordered products
  for (let i = 0; i < orderedProducts.length; i += 2) {
    const product = orderedProducts[i];
    const quantity = Number(orderedProducts[i + 1]);

    if (!stock.hasOwnProperty(product)) {
      stock[product] = quantity;
    } else {
      stock[product] += quantity;
    }
  }

  // Print the updated stock
  for (const product in stock) {
    console.log(`${product} -> ${stock[product]}`);
  }
}

// Test Cases
const currentStock1 = [
  "Chips",
  "5",
  "CocaCola",
  "9",
  "Bananas",
  "14",
  "Pasta",
  "4",
  "Beer",
  "2",
];

const orderedProducts1 = [
  "Flour",
  "44",
  "Oil",
  "12",
  "Pasta",
  "7",
  "Tomatoes",
  "70",
  "Bananas",
  "30",
];

updateStock(currentStock1, orderedProducts1);

const currentStock2 = [
  "Salt",
  "2",
  "Fanta",
  "4",
  "Apple",
  "14",
  "Water",
  "4",
  "Juice",
  "5",
];

const orderedProducts2 = [
  "Sugar",
  "44",
  "Oil",
  "12",
  "Apple",
  "7",
  "Tomatoes",
  "7",
  "Bananas",
  "30",
];

updateStock(currentStock2, orderedProducts2);
