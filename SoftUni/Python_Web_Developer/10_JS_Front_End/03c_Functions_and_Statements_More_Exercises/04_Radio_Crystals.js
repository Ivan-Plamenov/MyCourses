function crystalOps(arr) {
  var operations = {
    cut: function (crystal) {
      return crystal / 4;
    },
    lap: function (crystal) {
      return crystal * 0.8;
    },
    grind: function (crystal) {
      return crystal - 20;
    },
    etch: function (crystal) {
      return crystal - 2;
    },
    xray: function (crystal) {
      return crystal + 1;
    },
    transport: function (crystal) {
      return Math.floor(crystal);
    },
  };

  let target, crystals;
  [target, ...crystals] = arr;
  let countOps = 0;

  crystals.forEach((crystal) => {
    console.log(`Processing chunk ${crystal} microns`);
    while (crystal !== target) {
      while (operations.cut(crystal) >= target) {
        crystal = operations.cut(crystal);
        countOps++;
      }
      if (countOps > 0) {
        console.log(`Cut x${countOps}`);
        console.log(`Transporting and washing`);
        crystal = operations.transport(crystal);
      }
      countOps = 0;
      while (operations.lap(crystal) >= target) {
        crystal = operations.lap(crystal);
        countOps++;
      }
      if (countOps > 0) {
        console.log(`Lap x${countOps}`);
        console.log(`Transporting and washing`);
        crystal = operations.transport(crystal);
      }
      countOps = 0;
      while (operations.grind(crystal) >= target) {
        crystal = operations.grind(crystal);
        countOps++;
      }
      if (countOps > 0) {
        console.log(`Grind x${countOps}`);
        console.log(`Transporting and washing`);
        crystal = operations.transport(crystal);
      }
      countOps = 0;
      while (operations.etch(crystal) >= target - 1) {
        crystal = operations.etch(crystal);
        countOps++;
      }
      if (countOps > 0) {
        console.log(`Etch x${countOps}`);
        console.log(`Transporting and washing`);
        crystal = operations.transport(crystal);
      }
      countOps = 0;
      if (crystal < target) {
        crystal = operations.xray(crystal);
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${crystal} microns`);
  });
}
