function solve() {
  var check = document.querySelectorAll("button")[0];
  var clear = document.querySelectorAll("button")[1];
  var fields = document.querySelectorAll("tbody tr td input");
  var result = document.querySelector("#check p");
  var sudokuTable = document.querySelector("table");

  check.addEventListener("click", checkResult);
  clear.addEventListener("click", clearBoard);

  let matrix = [
    [fields[0].value, fields[1].value, fields[2].value],
    [fields[3].value, fields[4].value, fields[5].value],
    [fields[6].value, fields[7].value, fields[8].value],
  ];

  function checkResult() {
    if (traverseMatrix(matrix)) {
      result.textContent = "You solve it! Congratulations!";
      result.style.color = "green";
      sudokuTable.style.border = "2px solid green";
    } else {
      result.textContent = "NOP! You are not done yet...";
      result.style.color = "red";
      sudokuTable.style.border = "2px solid red";
    }
  }

  function clearBoard() {
    for (let field of fields) {
      field.value = "";
      result.textContent = "";
      sudokuTable.style.border = "none";
    }
  }

  function traverseMatrix(mtx) {
    for (let i = 1; i < mtx.length; i++) {
      let row = mtx[i];
      let col = mtx.map((row) => row[i]);
      if (
        col.length != [...new Set(col)].length ||
        row.length != [...new Set(row)].length
      ) {
        return false;
      }
    }
    return true;
  }
}
