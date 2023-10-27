function reverseArray(n, arr) {
  const reversedArray = [];

  for (let i = 0; i < n; i++) {
    reversedArray.push(arr[i]);
  }

  console.log(reversedArray.reverse().join(" "));
}

// Test Cases
reverseArray(3, [10, 20, 30, 40, 50]); // Output: 30 20 10
reverseArray(4, [-1, 20, 99, 5]); // Output: 5 99 20 -1
reverseArray(2, [66, 43, 75, 89, 47]); // Output: 43 66
