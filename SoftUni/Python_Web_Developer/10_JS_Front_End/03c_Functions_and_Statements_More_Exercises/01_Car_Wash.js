function carWash(commands) {
  let cleanliness = 0;

  for (const command of commands) {
    switch (command) {
      case "soap":
        cleanliness += 10;
        break;
      case "water":
        cleanliness += cleanliness * 0.2;
        break;
      case "vacuum cleaner":
        cleanliness += cleanliness * 0.25;
        break;
      case "mud":
        cleanliness -= cleanliness * 0.1;
        break;
    }
  }

  cleanliness = Math.min(100, cleanliness); // Ensure cleanliness doesn't exceed 100%
  cleanliness = Math.max(0, cleanliness); // Ensure cleanliness doesn't go below 0%

  console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

// Test Cases
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
