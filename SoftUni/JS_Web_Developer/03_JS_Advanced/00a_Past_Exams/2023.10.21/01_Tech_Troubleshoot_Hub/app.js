// 100 / 100
function solution() {
  const form = document.querySelector("form");
  const previewList = document.querySelector(".preview-list");
  const pendingList = document.querySelector(".pending-list");
  const resolvedList = document.querySelector(".resolved-list");
  const addBtn = document.getElementById("add-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = document.getElementById("employee").value;
    const category = document.getElementById("category").value;
    const urgency = document.getElementById("urgency").value;
    const team = document.getElementById("team").value;
    const description = document.getElementById("description").value;

    if (employee && category && urgency && team && description) {
      const li = document.createElement("li");
      li.className = "problem-content";

      li.innerHTML = `
              <article>
                  <p>From: ${employee}</p>
                  <p>Category: ${category}</p>
                  <p>Urgency: ${urgency}</p>
                  <p>Assigned to: ${team}</p>
                  <p>Description: ${description}</p>
              </article>
              <button class="edit-btn">Edit</button>
              <button class="continue-btn">Continue</button>
          `;

      previewList.appendChild(li);

      // Reset the form and disable the add button.
      form.reset();
      addBtn.disabled = true;
    }
  });

  previewList.addEventListener("click", function (e) {
    if (e.target.className === "edit-btn") {
      const article = e.target.previousElementSibling;
      const pElements = Array.from(article.querySelectorAll("p"));

      document.getElementById("employee").value =
        pElements[0].textContent.replace("From: ", "");
      document.getElementById("category").value =
        pElements[1].textContent.replace("Category: ", "");
      document.getElementById("urgency").value =
        pElements[2].textContent.replace("Urgency: ", "");
      document.getElementById("team").value = pElements[3].textContent.replace(
        "Assigned to: ",
        ""
      );
      document.getElementById("description").value =
        pElements[4].textContent.replace("Description: ", "");

      e.target.parentElement.remove();

      addBtn.disabled = false;
    } else if (e.target.className === "continue-btn") {
      const li = e.target.parentElement;
      li.removeChild(li.querySelector(".edit-btn"));
      li.removeChild(li.querySelector(".continue-btn"));

      const resolveBtn = document.createElement("button");
      resolveBtn.className = "resolve-btn";
      resolveBtn.textContent = "Resolved";
      li.appendChild(resolveBtn);

      pendingList.appendChild(li);
    }
  });

  pendingList.addEventListener("click", function (e) {
    if (e.target.className === "resolve-btn") {
      const li = e.target.parentElement;
      li.removeChild(li.querySelector(".resolve-btn"));

      const clearBtn = document.createElement("button");
      clearBtn.className = "clear-btn";
      clearBtn.textContent = "Clear";
      li.appendChild(clearBtn);

      resolvedList.appendChild(li);
    }
  });

  resolvedList.addEventListener("click", function (e) {
    if (e.target.className === "clear-btn") {
      e.target.parentElement.remove();
    }
  });
}
