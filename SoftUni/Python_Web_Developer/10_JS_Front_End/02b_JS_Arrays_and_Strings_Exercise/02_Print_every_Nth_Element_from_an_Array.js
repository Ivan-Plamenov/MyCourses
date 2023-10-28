function printEveryNthElement(arr, N) {
  const result = [];

  for (let i = 0; i < arr.length; i += N) {
    result.push(arr[i]);
  }

  return result;
}
