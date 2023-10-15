function generateOrbit([width, height, x, y]) {
  let matrix = [];

  for (let row = 0; row < height; row++) {
    let currentRow = [];
    for (let col = 0; col < width; col++) {
      // Calculate the Manhattan distance
      let distance = Math.max(Math.abs(row - x), Math.abs(col - y));
      currentRow.push(distance + 1);
    }
    matrix.push(currentRow);
  }

  // Print the matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
