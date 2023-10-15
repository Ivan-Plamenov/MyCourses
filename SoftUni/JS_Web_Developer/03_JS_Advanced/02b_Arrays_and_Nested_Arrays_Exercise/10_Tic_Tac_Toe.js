// 90 / 100
function ticTacToe(moves) {
  const dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let currentPlayer = "X"; // Starting player

  function printDashboard() {
    for (let row of dashboard) {
      console.log(row.map((cell) => cell || "false").join("\t"));
    }
  }

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        dashboard[i][0] === dashboard[i][1] &&
        dashboard[i][1] === dashboard[i][2] &&
        dashboard[i][0] !== false
      ) {
        return dashboard[i][0];
      }

      if (
        dashboard[0][i] === dashboard[1][i] &&
        dashboard[1][i] === dashboard[2][i] &&
        dashboard[0][i] !== false
      ) {
        return dashboard[0][i];
      }
    }

    if (
      dashboard[0][0] === dashboard[1][1] &&
      dashboard[1][1] === dashboard[2][2] &&
      dashboard[0][0] !== false
    ) {
      return dashboard[0][0];
    }

    if (
      dashboard[0][2] === dashboard[1][1] &&
      dashboard[1][1] === dashboard[2][0] &&
      dashboard[0][2] !== false
    ) {
      return dashboard[0][2];
    }

    return false;
  }

  for (let move of moves) {
    const [row, col] = move.split(" ").map(Number);

    if (dashboard[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    dashboard[row][col] = currentPlayer;

    const winner = checkWinner();
    if (winner) {
      console.log(`Player ${winner} wins!`);
      printDashboard();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle player
  }

  console.log("The game ended! Nobody wins :(");
  printDashboard();
}
