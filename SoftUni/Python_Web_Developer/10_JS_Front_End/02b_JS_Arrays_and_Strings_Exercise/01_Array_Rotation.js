function arrayRotation(arr, rotations) {
  const n = arr.length;
  rotations %= n; // Ensure the number of rotations is within the length of the array

  for (let i = 0; i < rotations; i++) {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }

  console.log(arr.join(" "));
}

// Test Cases
arrayRotation([51, 47, 32, 61, 21], 2); // Output: 32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4); // Output: 32 21 61 1
arrayRotation([2, 4, 15, 31], 5); // Output: 4 15 31 2
