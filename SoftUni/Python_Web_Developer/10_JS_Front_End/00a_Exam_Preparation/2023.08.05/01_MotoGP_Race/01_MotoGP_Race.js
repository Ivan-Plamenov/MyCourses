// 90 / 100

function motoGPRace(input) {
  let n = Number(input.shift());
  let riders = [];

  // Populate initial rider data
  for (let i = 0; i < n; i++) {
    let [rider, fuel, position] = input[i].split("|");
    fuel = Number(fuel);
    position = Number(position);
    riders.push({ rider, fuel, position });
  }

  // Process commands
  for (let command of input) {
    let [action, ...args] = command.split(" - ");

    if (action === "Finish") {
      break;
    }

    if (action === "StopForFuel") {
      let riderName = args[0];
      let minimumFuel = Number(args[1]);
      let changedPosition = Number(args[2]);

      let rider = riders.find((r) => r.rider === riderName);
      if (rider) {
        if (rider.fuel < minimumFuel) {
          rider.position = changedPosition;
          console.log(
            `${rider.rider} stopped to refuel but lost his position, now he is ${changedPosition}.`
          );
        } else {
          console.log(`${rider.rider} does not need to stop for fuel!`);
        }
      }
    } else if (action === "Overtaking") {
      let rider1Name = args[0];
      let rider2Name = args[1];

      let rider1 = riders.find((r) => r.rider === rider1Name);
      let rider2 = riders.find((r) => r.rider === rider2Name);

      if (rider1 && rider2 && rider1.position < rider2.position) {
        [rider1.position, rider2.position] = [rider2.position, rider1.position];
        console.log(`${rider1.rider} overtook ${rider2.rider}!`);
      }
    } else if (action === "EngineFail") {
      let riderName = args[0];
      let lapsLeft = Number(args[1]);

      let riderIndex = riders.findIndex((r) => r.rider === riderName);
      if (riderIndex !== -1) {
        riders.splice(riderIndex, 1);
        console.log(
          `${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
        );
      }
    }
  }

  // Sort riders by position and print the final positions
  riders.sort((a, b) => a.position - b.position);

  for (let rider of riders) {
    console.log(`${rider.rider}\n  Final position: ${rider.position}`);
  }
}
