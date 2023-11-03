function solve() {
  const nameElement = document.getElementById("name");
  const emailElement = document.getElementById("email");
  const contNumElement = document.getElementById("contact-number");
  const classTypeElement = document.getElementById("class-type");
  const classTimeElement = document.getElementById("class-time");
  const nextButtonElement = document.getElementById("next-btn");
  const previewUlElement = document.querySelector(".class-info");
  const confirmUlElement = document.querySelector(".confirm-class");
  const mainElement = document.getElementById("main");
  const bodyElement = document.getElementById("body");
  nextButtonElement.addEventListener("click", onNext);

  function onNext(e) {
    e.preventDefault();
    if (
      nameElement.value == "" ||
      emailElement.value == "" ||
      contNumElement.value == "" ||
      classTypeElement.value == "" ||
      classTimeElement.value == ""
    ) {
      return;
    }

    let liElement = document.createElement("li");
    liElement.setAttribute("class", "info-item");

    let article = document.createElement("article");
    article.setAttribute("class", "personal-info");

    let nameParagraph = document.createElement("p");
    nameParagraph.textContent = nameElement.value;

    let emailParagraph = document.createElement("p");
    emailParagraph.textContent = emailElement.value;

    let contNumParagraph = document.createElement("p");
    contNumParagraph.textContent = contNumElement.value;

    let classTypeParagraph = document.createElement("p");
    classTypeParagraph.textContent = classTypeElement.value;

    let classTimeParagraph = document.createElement("p");
    classTimeParagraph.textContent = classTimeElement.value;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.setAttribute("class", "continue-btn");
    continueBtn.textContent = "Continue";

    article.appendChild(nameParagraph);
    article.appendChild(emailParagraph);
    article.appendChild(contNumParagraph);
    article.appendChild(classTypeParagraph);
    article.appendChild(classTimeParagraph);
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    previewUlElement.appendChild(liElement);

    let editedName = nameElement.value;
    let editedEmail = emailElement.value;
    let editedContNum = contNumElement.value;
    let editedClassType = classTypeElement.value;
    let editedClassTime = classTimeElement.value;

    nameElement.value = "";
    emailElement.value = "";
    contNumElement.value = "";
    classTypeElement.value = "";
    classTimeElement.value = "";

    nextButtonElement.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      nameElement.value = editedName;
      emailElement.value = editedEmail;
      contNumElement.value = editedContNum;
      classTypeElement.value = editedClassType;
      classTimeElement.value = editedClassTime;

      nextButtonElement.disabled = false;

      liElement.remove();
    }
    continueBtn.addEventListener("click", onContinue);

    function onContinue() {
      let liElementContinue = document.createElement("li");
      liElementContinue.setAttribute("class", "continue-info");

      let articleContinue = document.createElement("article");
      articleContinue = article;

      let cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("class", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      let confirmBtn = document.createElement("button");
      confirmBtn.setAttribute("class", "confirm-btn");
      confirmBtn.textContent = "Confirm";

      liElementContinue.appendChild(articleContinue);
      liElementContinue.appendChild(cancelBtn);
      liElementContinue.appendChild(confirmBtn);
      confirmUlElement.appendChild(liElementContinue);

      liElement.remove();

      cancelBtn.addEventListener("click", onCancel);

      function onCancel() {
        liElementContinue.remove();
        nextButtonElement.disabled = false;
      }
      confirmBtn.addEventListener("click", onConfirm);

      function onConfirm() {
        mainElement.remove();
        let header1 = document.createElement("h1");
        header1.setAttribute("id", "thank-you");
        header1.textContent =
          "Thank you for scheduling your appointment, we look forward to seeing you!";

        let backBtn = document.createElement("button");
        backBtn.setAttribute("id", "done-btn");
        backBtn.textContent = "Done";

        bodyElement.appendChild(header1);
        bodyElement.appendChild(backBtn);

        backBtn.addEventListener("click", onBack);

        function onBack() {
          location.reload();
        }
      }
    }
  }
}
