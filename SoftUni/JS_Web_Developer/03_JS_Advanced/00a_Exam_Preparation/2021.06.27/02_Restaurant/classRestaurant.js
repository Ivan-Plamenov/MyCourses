class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (let product of products) {
      let [productName, productQuantity, productTotalPrice] =
        product.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (this.budgetMoney >= productTotalPrice) {
        if (!this.stockProducts[productName]) {
          this.stockProducts[productName] = 0;
        }
        this.stockProducts[productName] += productQuantity;
        this.budgetMoney -= productTotalPrice;
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    return this.history.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: neededProducts,
        price: price,
      };
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meal(s) in the menu, other ideas?`;
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      return Object.entries(this.menu)
        .map(([meal, details]) => `${meal} - $ ${details.price}`)
        .join("\n");
    }
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    for (let item of this.menu[meal].products) {
      let [productName, productQuantity] = item.split(" ");
      productQuantity = Number(productQuantity);

      if (
        !this.stockProducts[productName] ||
        this.stockProducts[productName] < productQuantity
      ) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }

    for (let item of this.menu[meal].products) {
      let [productName, productQuantity] = item.split(" ");
      this.stockProducts[productName] -= Number(productQuantity);
    }

    this.budgetMoney += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}
