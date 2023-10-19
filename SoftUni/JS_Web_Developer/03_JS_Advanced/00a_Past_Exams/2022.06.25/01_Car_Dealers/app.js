function solve() {
  const makeInputEl = document.getElementById("make");
  const modelInputEl = document.getElementById("model");
  const yearInputEl = document.getElementById("year");
  const fuelInputEl = document.getElementById("fuel");
  const originalInputEl = document.getElementById("original-cost");
  const sellingInputEl = document.getElementById("selling-price");
  const submitBtnEl = document.getElementById("publish");
  const tbodyEl = document.getElementById("table-body");
  const ulEl = document.getElementById("cars-list");
  const profitEl = document.getElementById("profit");

  submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault();

    const make = makeInputEl.value;
    const model = modelInputEl.value;
    const year = yearInputEl.value;
    const fuel = fuelInputEl.value;
    const original = Number(originalInputEl.value);
    const selling = Number(sellingInputEl.value);

    if (
      !make ||
      !model ||
      !year ||
      !fuel ||
      !original ||
      !selling ||
      selling <= original
    ) {
      return;
    }

    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    const makeTdEl = document.createElement("td");
    makeTdEl.textContent = make;

    const modelTdEl = document.createElement("td");
    modelTdEl.textContent = model;

    const yearTdEl = document.createElement("td");
    yearTdEl.textContent = year;

    const fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuel;

    const originalTdEl = document.createElement("td");
    originalTdEl.textContent = original;

    const sellingTdEl = document.createElement("td");
    sellingTdEl.textContent = selling;

    const btnsTdEl = document.createElement("td");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("action-btn", "edit");
    editBtnEl.textContent = "Edit";

    const sellBtnEl = document.createElement("button");
    sellBtnEl.classList.add("action-btn", "sell");
    sellBtnEl.textContent = "Sell";

    btnsTdEl.appendChild(editBtnEl);
    btnsTdEl.appendChild(sellBtnEl);

    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalTdEl);
    trEl.appendChild(sellingTdEl);
    trEl.appendChild(btnsTdEl);

    tbodyEl.appendChild(trEl);

    makeInputEl.value = "";
    modelInputEl.value = "";
    yearInputEl.value = "";
    fuelInputEl.value = "";
    originalInputEl.value = "";
    sellingInputEl.value = "";

    editBtnEl.addEventListener("click", (e) => {
      e.preventDefault();

      makeInputEl.value = make;
      modelInputEl.value = model;
      yearInputEl.value = year;
      fuelInputEl.value = fuel;
      originalInputEl.value = original;
      sellingInputEl.value = selling;

      trEl.remove();
    });

    sellBtnEl.addEventListener("click", (e) => {
      e.preventDefault();

      const liEl = document.createElement("li");
      liEl.classList.add("each-list");

      const makeModelSpanEl = document.createElement("span");
      makeModelSpanEl.textContent = `${make} ${model}`;

      const yearSpanEl = document.createElement("span");
      yearSpanEl.textContent = year;

      const priceSpanEl = document.createElement("span");
      priceSpanEl.textContent = selling - original;

      liEl.appendChild(makeModelSpanEl);
      liEl.appendChild(yearSpanEl);
      liEl.appendChild(priceSpanEl);

      ulEl.appendChild(liEl);

      trEl.remove();

      profitEl.textContent = (
        Number(profitEl.textContent) +
        (selling - original)
      ).toFixed(2);
    });
  });
}
