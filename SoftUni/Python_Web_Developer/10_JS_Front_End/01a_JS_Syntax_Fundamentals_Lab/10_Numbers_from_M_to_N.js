function printNumbersFromMToN(M, N) {
  for (let i = M; i >= N; i--) {
    console.log(i);
  }
}

// Test Cases
printNumbersFromMToN(6, 2); // Output: 6 5 4 3 2
printNumbersFromMToN(4, 1); // Output: 4 3 2 1
