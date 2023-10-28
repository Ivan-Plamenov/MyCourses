function sortNumbers(numbers) {
  // Sort the numbers in ascending order
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const result = [];

  // Use two pointers to extract the smallest and largest numbers
  let left = 0;
  let right = sortedNumbers.length - 1;

  while (left <= right) {
    // Add the smallest number to the result
    result.push(sortedNumbers[left]);

    // Add the largest number to the result
    if (left !== right) {
      result.push(sortedNumbers[right]);
    }

    // Move the pointers
    left++;
    right--;
  }

  return result;
}
