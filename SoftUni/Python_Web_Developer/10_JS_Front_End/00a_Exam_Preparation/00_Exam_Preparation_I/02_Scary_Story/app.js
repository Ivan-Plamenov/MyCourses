// 91 / 100
function solution() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const genreSelect = document.getElementById("genre");
  const titleInput = document.getElementById("story-title");
  const storyTextarea = document.getElementById("story");
  const publishBtn = document.getElementById("form-btn");
  const previewList = document.getElementById("preview-list");

  // Enable or disable the Publish button based on form fields
  function togglePublishButton(enable) {
    publishBtn.disabled = !enable;
  }

  // Check if all inputs have values
  function inputsAreValid() {
    return (
      firstNameInput.value &&
      lastNameInput.value &&
      ageInput.value &&
      titleInput.value &&
      storyTextarea.value
    );
  }

  // Clear all input fields
  function clearInputs() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    titleInput.value = "";
    genreSelect.selectedIndex = 0;
    storyTextarea.value = "";
  }

  // Load the story for editing
  function loadStoryForEditing(storyInfo) {
    const { firstName, lastName, age, genre, title, story } = storyInfo;
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    ageInput.value = age;
    genreSelect.value = genre;
    titleInput.value = title;
    storyTextarea.value = story;
  }

  // Add event listener to Publish button
  publishBtn.addEventListener("click", function () {
    if (!inputsAreValid()) {
      return;
    }

    const listItem = document.createElement("li");
    listItem.className = "story-info";

    const article = document.createElement("article");

    const nameH4 = document.createElement("h4");
    nameH4.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

    const ageP = document.createElement("p");
    ageP.textContent = `Age: ${ageInput.value}`;

    const titleP = document.createElement("p");
    titleP.textContent = `Title: ${titleInput.value}`;

    const genreP = document.createElement("p");
    genreP.textContent = `Genre: ${genreSelect.value}`;

    const storyP = document.createElement("p");
    storyP.textContent = storyTextarea.value;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Story";
    saveBtn.className = "save-btn";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Story";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Event listeners for the buttons
    saveBtn.addEventListener("click", function () {
      previewList.innerHTML = "";
      const mainDiv = document.getElementById("main");
      mainDiv.innerHTML = "<h1>Your scary story is saved!</h1>";
    });

    editBtn.addEventListener("click", function () {
      loadStoryForEditing({
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        age: ageInput.value,
        genre: genreSelect.value,
        title: titleInput.value,
        story: storyTextarea.value,
      });
      listItem.remove();
      togglePublishButton(true);
    });

    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      togglePublishButton(true);
    });

    // Append everything
    article.appendChild(nameH4);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyP);

    listItem.appendChild(article);
    listItem.appendChild(saveBtn);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    previewList.appendChild(listItem);

    // Clear input fields and disable the publish button
    clearInputs();
    togglePublishButton(false);
  });
}
