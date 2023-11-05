function spaceMission(input) {
  let numAstronauts = parseInt(input[0], 10);
  let astronauts = {};

  // Parse astronauts' details
  for (let i = 1; i <= numAstronauts; i++) {
    let [name, oxygen, energy] = input[i]
      .split(" ")
      .map((el, idx) => (idx > 0 ? parseInt(el, 10) : el));
    astronauts[name] = { oxygen, energy };
  }

  // Process commands
  for (let i = numAstronauts + 1; i < input.length; i++) {
    let [command, name, amount] = input[i].split(" - ");
    amount = parseInt(amount, 10);

    switch (command) {
      case "Explore":
        if (astronauts[name].energy >= amount) {
          astronauts[name].energy -= amount;
          console.log(
            `${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`
          );
        } else {
          console.log(`${name} does not have enough energy to explore!`);
        }
        break;
      case "Refuel":
        let energyToAdd = Math.min(200 - astronauts[name].energy, amount);
        astronauts[name].energy += energyToAdd;
        console.log(`${name} refueled their energy by ${energyToAdd}!`);
        break;
      case "Breathe":
        let oxygenToAdd = Math.min(100 - astronauts[name].oxygen, amount);
        astronauts[name].oxygen += oxygenToAdd;
        console.log(
          `${name} took a breath and recovered ${oxygenToAdd} oxygen!`
        );
        break;
      case "End":
        Object.keys(astronauts).forEach((astronaut) => {
          console.log(
            `Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`
          );
        });
        return; // End the function as the mission is over
    }
  }
}
