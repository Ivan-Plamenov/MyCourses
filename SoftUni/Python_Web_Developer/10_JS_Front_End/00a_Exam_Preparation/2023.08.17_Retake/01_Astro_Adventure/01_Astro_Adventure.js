function manageAstronauts(input) {
  const n = parseInt(input[0]);
  let astronauts = {};

  for (let i = 1; i <= n; i++) {
    const [name, oxygen, energy] = input[i].split(" ");
    astronauts[name] = {
      oxygen: parseInt(oxygen),
      energy: parseInt(energy),
    };
  }

  for (let i = n + 1; i < input.length; i++) {
    const command = input[i].split(" - ");
    const action = command[0];
    const astronautName = command[1];
    const amount = parseInt(command[2]);

    switch (action) {
      case "Explore":
        if (astronauts[astronautName].energy >= amount) {
          astronauts[astronautName].energy -= amount;
          console.log(
            `${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energy} energy!`
          );
        } else {
          console.log(
            `${astronautName} does not have enough energy to explore!`
          );
        }
        break;
      case "Refuel":
        let refueledAmount = Math.min(
          200 - astronauts[astronautName].energy,
          amount
        );
        astronauts[astronautName].energy += refueledAmount;
        console.log(
          `${astronautName} refueled their energy by ${refueledAmount}!`
        );
        break;
      case "Breathe":
        let recoveredOxygen = Math.min(
          100 - astronauts[astronautName].oxygen,
          amount
        );
        astronauts[astronautName].oxygen += recoveredOxygen;
        console.log(
          `${astronautName} took a breath and recovered ${recoveredOxygen} oxygen!`
        );
        break;
    }

    if (input[i] === "End") {
      break;
    }
  }

  for (let astronaut in astronauts) {
    console.log(
      `Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`
    );
  }
}
