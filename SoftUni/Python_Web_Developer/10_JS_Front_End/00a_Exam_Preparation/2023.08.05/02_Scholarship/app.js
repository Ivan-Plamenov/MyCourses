function solve() {
  const nextBtn = document.getElementById("next-btn");
  const studentInput = document.getElementById("student");
  const universityInput = document.getElementById("university");
  const scoreInput = document.getElementById("score");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  nextBtn.addEventListener("click", function () {
    const studentName = studentInput.value.trim();
    const university = universityInput.value.trim();
    const score = scoreInput.value.trim();

    if (!studentName || !university || !score) {
      return; // Do nothing if any of the inputs are empty
    }

    const li = createListItem(studentName, university, score);
    previewList.appendChild(li);

    nextBtn.disabled = true; // Disable the Next button

    // Clear the form fields
    studentInput.value = "";
    universityInput.value = "";
    scoreInput.value = "";
  });

  function createListItem(name, university, score) {
    const li = document.createElement("li");
    li.className = "application";

    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    const pUniversity = document.createElement("p");
    const pScore = document.createElement("p");

    h4.textContent = name;
    pUniversity.textContent = `University: ${university}`;
    pScore.textContent = `Score: ${score}`;

    article.appendChild(h4);
    article.appendChild(pUniversity);
    article.appendChild(pScore);
    li.appendChild(article);

    const editButton = document.createElement("button");
    const applyButton = document.createElement("button");
    editButton.className = "action-btn edit";
    applyButton.className = "action-btn apply";
    editButton.textContent = "edit";
    applyButton.textContent = "apply";

    editButton.addEventListener("click", function () {
      studentInput.value = name;
      universityInput.value = university;
      scoreInput.value = score;

      previewList.removeChild(li);
      nextBtn.disabled = false;
    });

    applyButton.addEventListener("click", function () {
      li.removeChild(editButton);
      li.removeChild(applyButton);
      candidatesList.appendChild(li);
      nextBtn.disabled = false;
    });

    li.appendChild(editButton);
    li.appendChild(applyButton);

    return li;
  }
}
