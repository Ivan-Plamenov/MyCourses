function arrayRotation(arr, rotations) {
  const n = arr.length;
  rotations %= n; // Ensure the number of rotations is within the length of the array

  for (let i = 0; i < rotations; i++) {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }

  console.log(arr.join(" "));
}
