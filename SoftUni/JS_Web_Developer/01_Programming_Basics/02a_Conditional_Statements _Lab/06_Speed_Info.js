function speedInfo(input) {
  let speed = Number(input[0]);

  if (speed <= 10) {
    message = "slow";
  } else if (speed <= 50) {
    message = "average";
  } else if (speed <= 150) {
    message = "fast";
  } else if (speed <= 1000) {
    message = "ultra fast";
  } else {
    message = "extremely fast";
  }
  console.log(message);
}
