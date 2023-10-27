function calculateTotalPrice(product, quantity) {
  let price = 0;

  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
    default:
      console.log("Invalid product");
      return;
  }

  const totalPrice = price * quantity;
  console.log(totalPrice.toFixed(2));
}

// Test Cases
calculateTotalPrice("water", 5); // Output: 5.00
calculateTotalPrice("coffee", 2); // Output: 3.00
