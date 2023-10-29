function armies(input) {
  const leaders = {};

  for (const line of input) {
    if (line.includes("arrives")) {
      const leaderName = line.split(" arrives")[0];
      leaders[leaderName] = { totalArmyCount: 0, armies: {} };
    } else if (line.includes("defeated")) {
      const leaderName = line.split(" defeated")[0];
      delete leaders[leaderName];
    } else if (line.includes(":")) {
      const [leaderName, armyInfo] = line.split(": ");
      const [armyName, armyCount] = armyInfo.split(", ");
      if (leaders.hasOwnProperty(leaderName)) {
        leaders[leaderName].armies[armyName] = Number(armyCount);
        leaders[leaderName].totalArmyCount += Number(armyCount);
      }
    } else if (line.includes("+")) {
      const [armyName, armyCount] = line.split(" + ");
      for (const leaderName in leaders) {
        if (leaders[leaderName].armies.hasOwnProperty(armyName)) {
          leaders[leaderName].armies[armyName] += Number(armyCount);
          leaders[leaderName].totalArmyCount += Number(armyCount);
          break;
        }
      }
    }
  }

  const sortedLeaders = Object.keys(leaders).sort((a, b) => {
    return leaders[b].totalArmyCount - leaders[a].totalArmyCount;
  });

  for (const leader of sortedLeaders) {
    console.log(`${leader}: ${leaders[leader].totalArmyCount}`);
    const sortedArmies = Object.keys(leaders[leader].armies).sort((a, b) => {
      return leaders[leader].armies[b] - leaders[leader].armies[a];
    });
    for (const army of sortedArmies) {
      console.log(`>>> ${army} - ${leaders[leader].armies[army]}`);
    }
  }
}
