function horseRace(input) {
  let horses = input.shift().split("|");

  for (let command of input) {
    if (command === "Finish") {
      break;
    }

    let [action, ...args] = command.split(" ");

    if (action === "Retake") {
      let overtakingHorse = args[0];
      let overtakenHorse = args[1];
      let overtakingIndex = horses.indexOf(overtakingHorse);
      let overtakenIndex = horses.indexOf(overtakenHorse);

      if (
        overtakingIndex !== -1 &&
        overtakenIndex !== -1 &&
        overtakingIndex < overtakenIndex
      ) {
        [horses[overtakingIndex], horses[overtakenIndex]] = [
          horses[overtakenIndex],
          horses[overtakingIndex],
        ];
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (action === "Trouble") {
      let horseName = args[0];
      let horseIndex = horses.indexOf(horseName);

      if (horseIndex !== -1 && horseIndex < horses.length - 1) {
        [horses[horseIndex], horses[horseIndex + 1]] = [
          horses[horseIndex + 1],
          horses[horseIndex],
        ];
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    } else if (action === "Rage") {
      let horseName = args[0];
      let horseIndex = horses.indexOf(horseName);

      if (horseIndex === 1) {
        [horses[0], horses[1]] = [horses[1], horses[0]];
      }

      console.log(`${horseName} rages 2 positions ahead.`);
    } else if (action === "Miracle") {
      let lastHorse = horses.pop();
      horses.unshift(lastHorse);
      console.log(`What a miracle - ${lastHorse} becomes first.`);
    }
  }

  console.log(`The winner is: ${horses[0]}`);
  console.log(horses.join("->"));
}
