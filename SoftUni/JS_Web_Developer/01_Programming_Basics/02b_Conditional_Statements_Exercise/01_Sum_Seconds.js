function sumSeconds(input) {
  timeFirst = Number(input[0]);
  timeSecond = Number(input[1]);
  timeThird = Number(input[2]);

  let totalTime = timeFirst + timeSecond + timeThird;
  let totalMinutes = Math.floor(totalTime / 60);
  let totalSeconds = totalTime % 60;

  if (totalSeconds < 10) {
    console.log(`${totalMinutes}:0${totalSeconds}`);
  } else {
    console.log(`${totalMinutes}:${totalSeconds}`);
  }
}
