// 100/100
function solve() {
  document.getElementById("add-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Fetching values from the input fields
    let genre = document.getElementById("genre").value.trim();
    let name = document.getElementById("name").value.trim();
    let author = document.getElementById("author").value.trim();
    let date = document.getElementById("date").value.trim();

    // Check if any of the inputs are empty
    if (genre === "" || name === "" || author === "" || date === "") {
      return; // Do nothing if any field is empty
    }

    // Create the div element that will hold the song information
    let div = document.createElement("div");
    div.classList.add("hits-info");
    div.innerHTML = `
        <img src="./static/img/img.png" />
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>
      `;

    // Append the new div to the 'all-hits-container'
    document.querySelector(".all-hits-container").appendChild(div);

    // Clear the input fields
    document.getElementById("genre").value = "";
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";

    // Like button functionality
    div.querySelector(".like-btn").addEventListener("click", function () {
      let likesParagraph = document.querySelector("#total-likes p");
      let likes = parseInt(likesParagraph.textContent.split(": ")[1]);
      likesParagraph.textContent = `Total Likes: ${likes + 1}`;
      this.disabled = true; // Disable the button after liking
    });

    // Save button functionality
    div.querySelector(".save-btn").addEventListener("click", function () {
      let savedContainer = document.querySelector(".saved-container");
      this.parentElement.querySelector(".like-btn").remove(); // Remove the like button
      this.remove(); // Remove the save button itself
      savedContainer.appendChild(div); // Move the div to the saved container
    });

    // Delete button functionality
    div.querySelector(".delete-btn").addEventListener("click", function () {
      this.parentElement.remove(); // Remove the song's div
    });
  });
}
