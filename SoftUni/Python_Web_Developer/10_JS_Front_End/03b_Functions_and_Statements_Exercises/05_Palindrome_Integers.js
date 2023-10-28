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
