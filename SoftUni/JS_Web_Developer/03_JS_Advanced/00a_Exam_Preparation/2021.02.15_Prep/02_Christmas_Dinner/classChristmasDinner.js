class ChristmasDinner {
  _budget;

  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this._budget;
  }

  set budget(value) {
    if (value < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this._budget = value;
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
    if (productsList.some((p) => !this.products.includes(p))) {
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
    return Object.entries(this.guests)
      .map(([guestName, dish]) => {
        let dishObj = this.dishes.find((d) => d.recipeName === dish);
        return `${guestName} will eat ${dish}, which consists of ${dishObj.productsList.join(
          ", "
        )}`;
      })
      .join("\n");
  }
}
