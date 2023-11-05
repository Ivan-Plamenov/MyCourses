// 90/100
function solve() {
  const addButton = document.getElementById("add-btn");
  const playerInput = document.getElementById("player");
  const scoreInput = document.getElementById("score");
  const roundInput = document.getElementById("round");
  const sureList = document.getElementById("sure-list");
  const scoreboardList = document.getElementById("scoreboard-list");
  const clearButton = document.querySelector(".clear");

  addButton.addEventListener("click", function () {
    const playerName = playerInput.value.trim();
    const score = scoreInput.value.trim();
    const round = roundInput.value.trim();

    if (!playerName || !score || !round) {
      return; // Do nothing if any of the inputs are empty
    }

    const li = createDartItem(playerName, score, round);
    sureList.appendChild(li);

    addButton.disabled = true; // Disable the Add button

    // Clear the input fields
    playerInput.value = "";
    scoreInput.value = "";
    roundInput.value = "";
  });

  function createDartItem(playerName, score, round) {
    const li = document.createElement("li");
    li.className = "dart-item";

    const article = document.createElement("article");
    const pPlayer = document.createElement("p");
    const pScore = document.createElement("p");
    const pRound = document.createElement("p");

    pPlayer.textContent = playerName;
    pScore.textContent = `Score: ${score}`;
    pRound.textContent = `Round: ${round}`;

    article.appendChild(pPlayer);
    article.appendChild(pScore);
    article.appendChild(pRound);
    li.appendChild(article);

    const editButton = document.createElement("button");
    const okButton = document.createElement("button");
    editButton.className = "btn edit";
    okButton.className = "btn ok";
    editButton.textContent = "edit";
    okButton.textContent = "ok";

    editButton.addEventListener("click", function () {
      playerInput.value = playerName;
      scoreInput.value = score;
      roundInput.value = round;

      sureList.removeChild(li);
      addButton.disabled = false;
    });

    okButton.addEventListener("click", function () {
      article.removeChild(pPlayer);
      article.removeChild(pScore);
      article.removeChild(pRound);

      scoreboardList.appendChild(article);
      addButton.disabled = false;
    });

    li.appendChild(editButton);
    li.appendChild(okButton);

    return li;
  }

  clearButton.addEventListener("click", function () {
    window.location.reload(); // Reloads the application
  });
}
