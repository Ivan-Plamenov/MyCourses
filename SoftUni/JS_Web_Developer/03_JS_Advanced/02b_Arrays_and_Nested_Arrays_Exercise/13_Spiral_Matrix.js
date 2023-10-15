function generateSpiralMatrix(rows, cols) {
  let matrix = Array.from(Array(rows), () => new Array(cols).fill(0));
  let num = 1;
  let top = 0,
    bottom = rows - 1,
    left = 0,
    right = cols - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // Traverse from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  // Print the matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
