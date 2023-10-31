const clearFields = (arr) => arr.forEach((x) => (x.value = ""));

function validData(data) {
  return data.every(([_, value]) => value !== "");
}

function createTableRow(student) {
  const tr = document.createElement("tr");

  Object.entries(student).forEach(([key, value]) => {
    if (key !== "_id") {
      const td = document.createElement("td");
      td.innerHTML = value;
      tr.appendChild(td);
    }
  });

  return tr;
}

async function displayStudents() {
  try {
    const studentsData = await getStudents();
    const table = document.querySelector("#results > tbody");
    table.innerHTML = "";

    Object.values(studentsData).forEach((student) => {
      const tr = createTableRow(student);
      table.appendChild(tr);
    });
  } catch (error) {
    console.error("Error fetching and displaying students:", error);
  }
}

async function getStudents() {
  try {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students"
    );
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching students data:", error);
  }
}

async function postStudent(data) {
  try {
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      }
    );
    return await response.json();
  } catch (error) {
    throw new Error("Error posting student data:", error);
  }
}

document.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = [...formData.entries()];

  if (validData(data)) {
    try {
      await postStudent(data);
      displayStudents();
      clearFields([
        ...document.querySelectorAll("#form > div.inputs > input[type=text]"),
      ]);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
});

// Initial display of students on page load
displayStudents();
