// 90 / 100
function motoGPRace(input) {
  const n = parseInt(input[0]);
  let riders = [];

  for (let i = 1; i <= n; i++) {
    const [name, fuel, position] = input[i].split("|");
    riders.push({
      name: name,
      fuel: parseInt(fuel),
      position: parseInt(position),
    });
  }

  riders.sort((a, b) => a.position - b.position);

  for (let i = n + 1; i < input.length; i++) {
    const command = input[i].split(" - ");
    const action = command[0];

    switch (action) {
      case "StopForFuel":
        const riderNameForFuel = command[1];
        const minFuel = parseInt(command[2]);
        const changedPosition = parseInt(command[3]);
        const riderForFuel = riders.find((r) => r.name === riderNameForFuel);

        if (riderForFuel.fuel < minFuel) {
          riderForFuel.position = changedPosition;
          console.log(
            `${riderNameForFuel} stopped to refuel but lost his position, now he is ${changedPosition}.`
          );
        } else {
          console.log(`${riderNameForFuel} does not need to stop for fuel!`);
        }
        break;

      case "Overtaking":
        const rider1Name = command[1];
        const rider2Name = command[2];
        const rider1 = riders.find((r) => r.name === rider1Name);
        const rider2 = riders.find((r) => r.name === rider2Name);

        if (rider1.position < rider2.position) {
          let tempPosition = rider1.position;
          rider1.position = rider2.position;
          rider2.position = tempPosition;
          console.log(`${rider1Name} overtook ${rider2Name}!`);
        }
        break;

      case "EngineFail":
        const riderNameForFail = command[1];
        const lapsLeft = command[2];
        const riderForFailIndex = riders.findIndex(
          (r) => r.name === riderNameForFail
        );

        if (riderForFailIndex !== -1) {
          console.log(
            `${riderNameForFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
          );
          riders.splice(riderForFailIndex, 1);
        }
        break;

      case "Finish":
        riders.sort((a, b) => a.position - b.position);
        for (const rider of riders) {
          console.log(`${rider.name}\n  Final position: ${rider.position}`);
        }
        return;
    }

    riders.sort((a, b) => a.position - b.position);
  }
}
