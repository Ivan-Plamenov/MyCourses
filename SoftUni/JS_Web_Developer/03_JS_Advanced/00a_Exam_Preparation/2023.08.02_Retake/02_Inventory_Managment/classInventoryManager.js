class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (
      this.items.length >= this.capacity &&
      !this.items.some((item) => item.name === itemName)
    ) {
      throw new Error("The inventory is already full.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name: itemName, quantity });
    }
    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (!existingItem) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }

    if (existingItem.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    existingItem.quantity -= quantity;
    if (existingItem.quantity === 0) {
      this.outOfStock.push(itemName);
      this.items = this.items.filter((item) => item.name !== itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name: itemName, quantity });
    }

    this.outOfStock = this.outOfStock.filter((item) => item !== itemName);
    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = "Current Inventory:";
    for (let item of this.items) {
      summary += `\n${item.name}: ${item.quantity}`;
    }
    if (this.outOfStock.length) {
      summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
    }
    return summary;
  }
}
