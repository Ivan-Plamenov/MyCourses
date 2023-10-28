function calculateFruitCost(fruit, weightGrams, pricePerKilogram) {
  const weightKilograms = weightGrams / 1000;
  const cost = weightKilograms * pricePerKilogram;

  console.log(
    `I need $${cost.toFixed(2)} to buy ${weightKilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
