function isMagical(matrix) {
  // Calculate the reference sum using the first row
  const refSum = matrix[0].reduce((acc, curr) => acc + curr, 0);

  // Check each row's sum
  for (let row of matrix) {
    if (row.reduce((acc, curr) => acc + curr, 0) !== refSum) {
      return false;
    }
  }

  // Check each column's sum
  for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }
    if (colSum !== refSum) {
      return false;
    }
  }

  return true;
}
