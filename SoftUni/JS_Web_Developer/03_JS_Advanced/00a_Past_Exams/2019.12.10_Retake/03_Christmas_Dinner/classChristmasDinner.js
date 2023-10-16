class ChristmasDinner {
  _budget; // private property for budget to use with accessor

  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  set budget(value) {
    if (value < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this._budget = value;
  }

  get budget() {
    return this._budget;
  }

  shopping([product, price]) {
    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    }
    this.products.push(product);
    this.budget -= price;
    return `You have successfully bought ${product}!`;
  }

  recipes({ recipeName, productsList }) {
    if (!productsList.every((product) => this.products.includes(product))) {
      throw new Error("We do not have this product");
    }
    this.dishes.push({ recipeName, productsList });
    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    if (!this.dishes.some((d) => d.recipeName === dish)) {
      throw new Error("We do not have this dish");
    }
    if (this.guests[name]) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let output = [];
    for (let [name, dish] of Object.entries(this.guests)) {
      let dishInfo = this.dishes.find((d) => d.recipeName === dish);
      output.push(
        `${name} will eat ${dish}, which consists of ${dishInfo.productsList.join(
          ", "
        )}`
      );
    }
    return output.join("\n");
  }
}
