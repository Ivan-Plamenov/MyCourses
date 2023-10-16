// 80 / 100
class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
    this.totalPrice = 0;
  }

  loadingVegetables(vegetables) {
    let addedVeggies = [];

    vegetables.forEach((veg) => {
      const [type, quantity, price] = veg.split(" ");
      const existingVeggie = this.availableProducts.find(
        (v) => v.type === type
      );

      if (existingVeggie) {
        existingVeggie.quantity += parseFloat(quantity);
        if (parseFloat(price) > existingVeggie.price) {
          existingVeggie.price = parseFloat(price);
        }
      } else {
        this.availableProducts.push({
          type: type,
          quantity: parseFloat(quantity),
          price: parseFloat(price),
        });
        addedVeggies.push(type);
      }
    });

    return `Successfully added ${[...new Set(addedVeggies)].join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    this.totalPrice = 0;

    selectedProducts.forEach((selProduct) => {
      const [type, quantity] = selProduct.split(" ");
      const veggie = this.availableProducts.find((v) => v.type === type);

      if (!veggie) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(
            2
          )}.`
        );
      } else if (veggie.quantity < parseFloat(quantity)) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        this.totalPrice += veggie.price * parseFloat(quantity);
        veggie.quantity -= parseFloat(quantity);
      }
    });

    return `Great choice! You must pay the following amount $${this.totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const veggie = this.availableProducts.find((v) => v.type === type);

    if (!veggie) {
      throw new Error(`${type} is not available in the store.`);
    } else if (veggie.quantity <= quantity) {
      veggie.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      veggie.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    this.availableProducts.sort((a, b) => a.price - b.price);
    let output = "Available vegetables:";
    this.availableProducts.forEach((product) => {
      output += `\n${product.type}-${product.quantity}-$${product.price.toFixed(
        2
      )}`;
    });
    output += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return output;
  }
}
