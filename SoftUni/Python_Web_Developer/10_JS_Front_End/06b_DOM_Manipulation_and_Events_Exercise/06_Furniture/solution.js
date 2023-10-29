function solve() {
  var genBtn = document.querySelectorAll("button")[0];
  var input = document.querySelectorAll("textarea")[0];
  var buyBtn = document.querySelectorAll("button")[1];
  var output = document.querySelectorAll("textarea")[1];
  var target = document.querySelector(".table tbody");

  genBtn.addEventListener("click", parseInfo);
  buyBtn.addEventListener("click", showBought);

  function parseInfo() {
    let parse = JSON.parse(input.value);
    for (let item of parse) {
      createElement(item, target);
    }
    let checkboxes = document.querySelectorAll("tbody tr td input");
    for (let box of checkboxes) {
      box.disabled = false;
    }
  }

  function showBought() {
    var allRows = document.querySelectorAll("tbody tr"),
      allNames = [],
      total = 0,
      avgDecor = 0;
    for (let row of allRows) {
      let parentName = row.children[1],
        parentPrice = row.children[2],
        parentDecor = row.children[3],
        parentCheck = row.children[4];
      if (parentCheck.children[0].checked) {
        allNames.push(parentName.children[0].textContent);
        total += Number(parentPrice.children[0].textContent);
        avgDecor += Number(parentDecor.children[0].textContent);
      }
    }
    avgDecor = avgDecor / allNames.length;
    output.value = `Bought furniture: ${allNames.join(
      ", "
    )}\nTotal price: ${total.toFixed(
      2
    )}\nAverage decoration factor: ${avgDecor}`;
  }

  function createElement(object, parent) {
    var row = document.createElement("tr"),
      imgCol = document.createElement("td"),
      image = document.createElement("img"),
      nameCol = document.createElement("td"),
      name = document.createElement("p"),
      priceCol = document.createElement("td"),
      price = document.createElement("p"),
      decCol = document.createElement("td"),
      decor = document.createElement("p"),
      checkCol = document.createElement("td"),
      checkbox = document.createElement("input");
    image.src = object.img;
    name.textContent = object.name;
    price.textContent = object.price;
    decor.textContent = object.decFactor;
    checkbox.type = "checkbox";
    imgCol.appendChild(image);
    nameCol.appendChild(name);
    priceCol.appendChild(price);
    decCol.appendChild(decor);
    checkCol.appendChild(checkbox);
    row.appendChild(imgCol);
    row.appendChild(nameCol);
    row.appendChild(priceCol);
    row.appendChild(decCol);
    row.appendChild(checkCol);
    parent.appendChild(row);
  }
}
