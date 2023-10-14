// 100/100
function calculateCaloriesPerGram(input) {
  // Parse the input values
  const fatPercentage = parseFloat(input[0]);
  const proteinPercentage = parseFloat(input[1]);
  const carbohydratePercentage = parseFloat(input[2]);
  const totalCalories = parseFloat(input[3]);
  const percentageOfWaterContent = parseFloat(input[4]);

  // Calculate the total grams of fat, protein, and carbohydrates
  const fatGrams = (fatPercentage * totalCalories) / 9;
  const proteinGrams = (proteinPercentage * totalCalories) / 4;
  const carbGrams = (carbohydratePercentage * totalCalories) / 4;

  // Calculate the total food weight
  const foodWeight = fatGrams + proteinGrams + carbGrams;

  // Calculate calories per gram of food
  const caloriesPerGram = totalCalories / foodWeight;

  // Adjust for water content
  const netCaloriesPerGram =
    caloriesPerGram * (1 - percentageOfWaterContent / 100);

  // Return the result formatted to the fourth decimal place
  return (netCaloriesPerGram * 100).toFixed();
}

// Test the function
console.log(calculateCaloriesPerGram(["60", "25", "15", "2500", "60"])); // 2.4000
console.log(calculateCaloriesPerGram(["40", "40", "20", "3000", "40"])); // 3.0857
console.log(calculateCaloriesPerGram(["20", "60", "20", "1800", "50"])); // 2.2500
