function findSmallestNumber(num1, num2, num3) {
  let smallest = num1;

  if (num2 < smallest) {
    smallest = num2;
  }

  if (num3 < smallest) {
    smallest = num3;
  }

  console.log(smallest);
}

// Test Cases
findSmallestNumber(2, 5, 3); // Output: 2
findSmallestNumber(600, 342, 123); // Output: 123
findSmallestNumber(25, 21, 4); // Output: 4
findSmallestNumber(2, 2, 2); // Output: 2
