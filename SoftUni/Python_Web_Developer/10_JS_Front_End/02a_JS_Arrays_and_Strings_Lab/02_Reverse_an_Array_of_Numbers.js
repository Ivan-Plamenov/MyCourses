function reverseArray(n, arr) {
  const reversedArray = [];

  for (let i = 0; i < n; i++) {
    reversedArray.push(arr[i]);
  }

  console.log(reversedArray.reverse().join(" "));
}
