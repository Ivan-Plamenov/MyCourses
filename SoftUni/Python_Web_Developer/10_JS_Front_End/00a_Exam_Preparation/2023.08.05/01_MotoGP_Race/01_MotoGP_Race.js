// 90 / 100

function motoGPRace(inputCommands) {
  let numRiders = parseInt(inputCommands[0], 10);
  let riders = {};

  // Initialize riders' details
  for (let i = 1; i <= numRiders; i++) {
    let [rider, fuel, position] = inputCommands[i]
      .split("|")
      .map((x, idx) => (idx === 0 ? x : parseInt(x, 10)));
    riders[rider] = { fuel, position };
  }

  // Process commands
  for (let command of inputCommands.slice(numRiders + 1)) {
    if (command === "Finish") {
      break;
    }

    let parts = command.split(" - ");
    let action = parts[0];

    if (action === "StopForFuel") {
      let [rider, minFuel, changedPosition] = parts
        .slice(1)
        .map((x, idx) => (idx === 0 ? x : parseInt(x, 10)));
      if (riders[rider].fuel < minFuel) {
        console.log(
          `${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`
        );
        riders[rider].position = changedPosition;
      } else {
        console.log(`${rider} does not need to stop for fuel!`);
      }
    } else if (action === "Overtaking") {
      let [rider1, rider2] = parts.slice(1);
      if (riders[rider1].position < riders[rider2].position) {
        [riders[rider1].position, riders[rider2].position] = [
          riders[rider2].position,
          riders[rider1].position,
        ];
        console.log(`${rider1} overtook ${rider2}!`);
      }
    } else if (action === "EngineFail") {
      let [rider, lapsLeft] = parts
        .slice(1)
        .map((x, idx) => (idx === 0 ? x : parseInt(x, 10)));
      console.log(
        `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
      );
      delete riders[rider];
    }
  }

  // Sort and print final positions
  let finalPositions = Object.keys(riders).sort(
    (a, b) => riders[a].position - riders[b].position
  );
  finalPositions.forEach((rider) => {
    console.log(`${rider}\n  Final position: ${riders[rider].position}`);
  });
}
