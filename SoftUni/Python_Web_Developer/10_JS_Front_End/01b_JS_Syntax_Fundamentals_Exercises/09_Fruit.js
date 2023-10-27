function calculateFruitCost(fruit, weightGrams, pricePerKilogram) {
  const weightKilograms = weightGrams / 1000;
  const cost = weightKilograms * pricePerKilogram;

  console.log(
    `I need $${cost.toFixed(2)} to buy ${weightKilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

// Test Cases
calculateFruitCost("orange", 2500, 1.8); // Output: I need $4.50 to buy 2.50 kilograms orange.
calculateFruitCost("apple", 1563, 2.35); // Output: I need $3.67 to buy 1.56 kilograms apple.
