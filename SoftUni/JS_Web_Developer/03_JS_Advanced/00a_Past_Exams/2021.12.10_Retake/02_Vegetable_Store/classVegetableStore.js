class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
    this.totalPrice = 0;
  }

  findProduct(type) {
    return this.availableProducts.find((product) => product.type === type);
  }

  loadingVegetables(vegetables) {
    let addedVeggies = [];

    vegetables.forEach((veg) => {
      let [type, quantity, price] = veg.split(" ");
      quantity = parseFloat(quantity);
      price = parseFloat(price);
      const existingProduct = this.findProduct(type);
      if (existingProduct) {
        existingProduct.quantity += quantity;
        if (price > existingProduct.price) {
          existingProduct.price = price;
        }
      } else {
        this.availableProducts.push({ type, quantity, price });
        addedVeggies.push(type);
      }
    });

    return `Successfully added ${[...new Set(addedVeggies)].join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    this.totalPrice = 0;
    selectedProducts.forEach((product) => {
      let [type, quantity] = product.split(" ");
      quantity = parseFloat(quantity);
      const existingProduct = this.findProduct(type);
      if (!existingProduct) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (quantity > existingProduct.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(
            2
          )}.`
        );
      }
      this.totalPrice += quantity * existingProduct.price;
      existingProduct.quantity -= quantity;
    });

    return `Great choice! You must pay the following amount $${this.totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const existingProduct = this.findProduct(type);
    if (!existingProduct) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (quantity >= existingProduct.quantity) {
      existingProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      existingProduct.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    this.availableProducts.sort((a, b) => a.price - b.price);
    let output = "Available vegetables:";
    this.availableProducts.forEach((product) => {
      output += `\n${product.type}-${product.quantity}-${product.price}`;
    });
    output += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return output;
  }
}
