// 100 / 100
function checkWeightLossGoal(input) {
  let totalDays = parseInt(input[0]);
  let totalKilometers = parseFloat(input[1]);
  let runKilometers = parseFloat(input[1]);

  for (let i = 1; i < totalDays + 1; i++) {
    const incresePerDay = parseInt(input[i + 1]);
    const increasePercentage = incresePerDay / 100;

    const dailyIncrease = totalKilometers * increasePercentage;
    totalKilometers += dailyIncrease;
    runKilometers += totalKilometers;
  }

  const goalKilometers = 1000;

  if (runKilometers >= goalKilometers) {
    const exceededKilometers = Math.ceil(runKilometers - goalKilometers);
    return `You've done a great job running ${exceededKilometers} more kilometers!`;
  } else {
    const missingKilometers = Math.ceil(goalKilometers - runKilometers);
    return `Sorry Mrs. Ivanova, you need to run ${Math.abs(
      missingKilometers
    )} more kilometers`;
  }
}

// Test input and expected output
const input = ["5", "30", "10", "15", "20", "5", "12"];
console.log(checkWeightLossGoal(input)); // Expected Output: "Sorry Mrs. Ivanova, you need to run 753 more kilometers"

// Test input and expected output
const input2 = ["4", "100", "30", "50", "60", "80"];
console.log(checkWeightLossGoal(input2)); // Expected Output : "You've done a great job running 299 more kilometers!"
