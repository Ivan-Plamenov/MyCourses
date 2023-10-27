function printEveryNthElement(arr, N) {
  const result = [];

  for (let i = 0; i < arr.length; i += N) {
    result.push(arr[i]);
  }

  return result;
}

// Test Cases
const result1 = printEveryNthElement(["5", "20", "31", "4", "20"], 2);
console.log(result1); // Output: ['5', '31', '20']

const result2 = printEveryNthElement(["dsa", "asd", "test", "tset"], 2);
console.log(result2); // Output: ['dsa', 'test']

const result3 = printEveryNthElement(["1", "2", "3", "4", "5"], 6);
console.log(result3); // Output: ['1']
