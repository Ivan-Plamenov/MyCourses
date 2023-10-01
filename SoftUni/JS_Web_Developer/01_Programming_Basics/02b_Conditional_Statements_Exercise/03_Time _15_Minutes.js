function timeMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  newMinutes = minutes + 15;

  if (newMinutes >= 60) {
    hours = hours + 1;
    minutes = newMinutes - 60;
  } else {
    minutes = newMinutes;
  }

  if (hours >= 24) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}
