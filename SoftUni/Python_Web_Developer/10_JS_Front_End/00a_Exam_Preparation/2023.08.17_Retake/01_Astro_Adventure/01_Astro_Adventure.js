function spaceMission(input) {
  let n = Number(input.shift());
  let astronauts = [];

  // Populate initial astronaut data
  for (let i = 0; i < n; i++) {
    let [name, oxygen, energy] = input[i].split(" ");
    oxygen = Number(oxygen);
    energy = Number(energy);
    astronauts.push({ name, oxygen, energy });
  }

  // Process commands
  for (let command of input) {
    if (command === "End") {
      break;
    }

    let [action, astronautName, amount] = command.split(" - ");
    amount = Number(amount);

    let astronaut = astronauts.find((a) => a.name === astronautName);

    if (action === "Explore") {
      if (astronaut.energy >= amount) {
        astronaut.energy -= amount;
        console.log(
          `${astronautName} has successfully explored a new area and now has ${astronaut.energy} energy!`
        );
      } else {
        console.log(`${astronautName} does not have enough energy to explore!`);
      }
    } else if (action === "Refuel") {
      let recovered = Math.min(200 - astronaut.energy, amount);
      astronaut.energy += recovered;
      console.log(`${astronautName} refueled their energy by ${recovered}!`);
    } else if (action === "Breathe") {
      let recovered = Math.min(100 - astronaut.oxygen, amount);
      astronaut.oxygen += recovered;
      console.log(
        `${astronautName} took a breath and recovered ${recovered} oxygen!`
      );
    }
  }

  // Print astronaut data
  for (let astronaut of astronauts) {
    console.log(
      `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`
    );
  }
}
