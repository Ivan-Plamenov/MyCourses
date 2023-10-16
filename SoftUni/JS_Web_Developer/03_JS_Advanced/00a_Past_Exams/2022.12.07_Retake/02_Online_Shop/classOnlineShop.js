// 90 / 100
class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }

    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    const prod = this.products.find((p) => p.product === product);

    if (!prod) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    if (minimalQuantity <= prod.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      const difference = minimalQuantity - prod.quantity;
      prod.quantity = minimalQuantity;
      return `You added ${difference} more from the ${product} products.`;
    }
  }

  sellProduct(product) {
    const prod = this.products.find((p) => p.product === product);

    if (!prod) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    prod.quantity -= 1;
    this.sales.push({ product, quantity: 1 });
    return `The ${product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error("There are no sales today!");
    }

    const soldProductsCount = this.sales.length;
    const productsInWarehouse = this.products
      .map((p) => `${p.product}-${p.quantity} more left`)
      .join(" \n");

    return `You sold ${soldProductsCount} products today!\nProducts in the warehouse: \n${productsInWarehouse}`;
  }
}
