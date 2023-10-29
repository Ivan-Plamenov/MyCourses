// Define the base URL for the API
const baseUrl = "http://localhost:3030/jsonstore/collections/books";

// Select the relevant HTML elements
const loadBooksBtn = document.getElementById("loadBooks");
const booksTableBody = document.querySelector("table tbody");
const form = document.getElementById("form");
const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const submitBtn = form.querySelector("button");

// Event listener for loading all books
loadBooksBtn.addEventListener("click", loadAllBooks);

// Event listener for submitting the form to create a new book
submitBtn.addEventListener("click", createBook);

// Function to load all books
async function loadAllBooks() {
  booksTableBody.innerHTML = "";

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    Object.entries(data).forEach(([id, book]) => {
      const { author, title } = book;

      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>
                    <button onclick="editBook('${id}')">Edit</button>
                    <button onclick="deleteBook('${id}')">Delete</button>
                </td>
            `;

      booksTableBody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

// Function to create a new book
async function createBook() {
  const author = authorInput.value.trim();
  const title = titleInput.value.trim();

  if (!author || !title) {
    alert("Both title and author must be provided.");
    return;
  }

  const newBook = {
    author,
    title,
  };

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error("Failed to create a new book.");
    }

    authorInput.value = "";
    titleInput.value = "";

    loadAllBooks();
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

// Function to edit a book
async function editBook(id) {
  // Implement the edit functionality here
  // You can use a similar approach as for creating a book
}

// Function to delete a book
async function deleteBook(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the book.");
    }

    loadAllBooks();
  } catch (error) {
    console.error("Error: " + error.message);
  }
}

// Initial load of all books when the page is loaded
loadAllBooks();
