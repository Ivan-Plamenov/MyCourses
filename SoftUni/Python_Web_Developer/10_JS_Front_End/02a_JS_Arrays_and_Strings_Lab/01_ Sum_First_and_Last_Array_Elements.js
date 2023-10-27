function sumFirstAndLast(arr) {
  if (arr.length >= 2) {
    const sum = arr[0] + arr[arr.length - 1];
    console.log(sum);
  } else if (arr.length === 1) {
    console.log(arr[0] * 2); // If there is only one element, double it
  } else {
    console.log("Array is empty.");
  }
}

// Test Cases
sumFirstAndLast([20, 30, 40]); // Output: 60
sumFirstAndLast([10, 17, 22, 33]); // Output: 43
sumFirstAndLast([11, 58, 69]); // Output: 80
sumFirstAndLast([5]); // Output: 10 (Double the single element)
sumFirstAndLast([]); // Output: "Array is empty."
