function solve() {
  // Create buttons and remove empty one
  const target = document.getElementById("selectMenuTo");

  const binary = document.createElement("option");
  const hex = document.createElement("option");

  binary.textContent = "Binary";
  binary.value = "binary";

  hex.textContent = "Hexadecimal";
  hex.value = "hexadecimal";

  target.appendChild(binary);
  target.appendChild(hex);

  // Convert value

  const button = document.querySelector("#container > button");

  const selectMap = {
    binary: (num) => num.toString(2),
    hexadecimal: (num) => num.toString(16).toUpperCase(),
  };

  button.addEventListener("click", (event) => {
    const input = document.getElementById("input");
    const output = document.getElementById("result");
    output.value = selectMap[target.value](+input.value);
  });
}
