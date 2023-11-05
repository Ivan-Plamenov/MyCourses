function solve() {
  const publishBtn = document.getElementById("publish-btn");
  const taskTitleInput = document.getElementById("task-title");
  const taskCategoryInput = document.getElementById("task-category");
  const taskContentInput = document.getElementById("task-content");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  publishBtn.addEventListener("click", function () {
    const title = taskTitleInput.value.trim();
    const category = taskCategoryInput.value.trim();
    const content = taskContentInput.value.trim();

    if (!title || !category || !content) {
      // Do nothing if any of the inputs are empty.
      return;
    }

    const listItem = document.createElement("li");
    listItem.className = "rpost";
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    const pCategory = document.createElement("p");
    pCategory.textContent = `Category: ${category}`;
    const pContent = document.createElement("p");
    pContent.textContent = `Content: ${content}`;
    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);

    const editButton = document.createElement("button");
    editButton.className = "action-btn edit";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      taskTitleInput.value = h4.textContent;
      taskCategoryInput.value = pCategory.textContent.substring(10);
      taskContentInput.value = pContent.textContent.substring(9);
      reviewList.removeChild(listItem);
    });

    const postButton = document.createElement("button");
    postButton.className = "action-btn post";
    postButton.textContent = "Post";
    postButton.addEventListener("click", function () {
      publishedList.appendChild(listItem);
      listItem.removeChild(editButton);
      listItem.removeChild(postButton);
    });

    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(postButton);

    reviewList.appendChild(listItem);

    // Clear input fields
    taskTitleInput.value = "";
    taskCategoryInput.value = "";
    taskContentInput.value = "";
  });
}
