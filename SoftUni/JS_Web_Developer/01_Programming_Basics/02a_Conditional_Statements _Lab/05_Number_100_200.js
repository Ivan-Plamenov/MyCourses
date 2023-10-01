function isNumber(input) {
  let number = Number(input[0]);
  if (number < 100) {
    greeting = "Less than 100";
  } else if (number <= 200) {
    greeting = "Between 100 and 200";
  } else {
    greeting = "Greater than 200";
  }
  console.log(greeting);
}
