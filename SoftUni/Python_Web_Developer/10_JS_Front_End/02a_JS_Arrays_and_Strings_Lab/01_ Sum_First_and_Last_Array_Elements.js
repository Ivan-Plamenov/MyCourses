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
