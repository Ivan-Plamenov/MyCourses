function requiredReading(input) {
  let pagesNumber = Number(input[0]);
  let pagesperHour = Number(input[1]);
  let daysNumber = Number(input[2]);

  totalTime = pagesNumber / pagesperHour;
  neededTime = totalTime / daysNumber;
  console.log(neededTime);
}
