function diagonalAttack(input) {
  // Parse the input into a matrix of numbers
  const matrix = input.map((row) => row.split(" ").map(Number));

  // Calculate the sums of the two main diagonals
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
  }

  // If the sums are equal, modify the matrix
  if (primaryDiagonalSum === secondaryDiagonalSum) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // Check if the element is not part of a main diagonal
        if (i !== j && i !== matrix.length - 1 - j) {
          matrix[i][j] = primaryDiagonalSum;
        }
      }
    }
  }

  // Print the matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
