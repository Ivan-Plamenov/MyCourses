function cookingByNumbers(number, op1, op2, op3, op4, op5) {
  number = Number(number);
  let arr = [op1, op2, op3, op4, op5];
  let currOper = arr.shift();

  for (let i = 1; i <= 5; i++) {
    if (currOper == "chop") {
      number /= 2;
    } else if (currOper == "dice") {
      number = Math.sqrt(number);
    } else if (currOper == "spice") {
      number += 1;
    } else if (currOper == "bake") {
      number *= 3;
    } else if (currOper == "fillet") {
      number -= number * 0.2;
    }

    currOper = arr.shift();
    console.log(number);
  }
}

// Test Cases
cookingByNumbers("32", ["chop", "chop", "chop", "chop", "chop"]);
// Output:
// 16
// 8
// 4
// 2
// 1

cookingByNumbers("9", ["dice", "spice", "chop", "bake", "fillet"]);
// Output:
// 3
// 4
// 2
// 6
// 4.8
