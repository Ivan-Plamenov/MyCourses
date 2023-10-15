class Textbox {
  constructor(selector, invalidSymbols) {
    this._invalidSymbols = invalidSymbols;
    this._elements = document.querySelectorAll(selector);

    // Link the value of all elements
    for (let el of this._elements) {
      el.addEventListener("input", () => (this.value = el.value));
    }
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    for (let el of this._elements) {
      el.value = newValue;
    }
  }

  get elements() {
    return this._elements;
  }

  isValid() {
    return !this._invalidSymbols.test(this.value);
  }
}
