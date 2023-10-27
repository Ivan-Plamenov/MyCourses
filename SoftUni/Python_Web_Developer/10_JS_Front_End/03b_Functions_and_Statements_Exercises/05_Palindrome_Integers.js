function checkPalindromes(arr) {
  function isPalindrome(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split("").reverse().join("");
    return numStr === reversedStr;
  }

  for (const num of arr) {
    console.log(isPalindrome(num));
  }
}

// Test Cases
const array1 = [123, 323, 421, 121];
checkPalindromes(array1); // Output: false, true, false, true

const array2 = [32, 2, 232, 1010];
checkPalindromes(array2); // Output: false, true, true, false
