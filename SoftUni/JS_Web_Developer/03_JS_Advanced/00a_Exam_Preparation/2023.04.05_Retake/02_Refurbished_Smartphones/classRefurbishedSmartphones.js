class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (
      !model ||
      typeof model !== "string" ||
      storage <= 0 ||
      price <= 0 ||
      !condition ||
      typeof condition !== "string"
    ) {
      throw new Error("Invalid smartphone!");
    }
    const smartphone = {
      model: model,
      storage: storage,
      price: parseFloat(price.toFixed(2)),
      condition: condition,
    };
    this.availableSmartphones.push(smartphone);
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }

  sellSmartphone(model, desiredStorage) {
    const index = this.availableSmartphones.findIndex((s) => s.model === model);
    if (index === -1) {
      throw new Error(`${model} was not found!`);
    }

    let smartphone = this.availableSmartphones[index];
    const storageDifference = smartphone.storage - desiredStorage;

    let discount = 0;
    if (storageDifference < 0) {
      if (Math.abs(storageDifference) <= 128) {
        discount = 0.1;
      } else {
        discount = 0.2;
      }
    }

    const soldPrice = parseFloat(
      (smartphone.price * (1 - discount)).toFixed(2)
    );
    this.revenue += soldPrice;
    this.soldSmartphones.push({
      model: smartphone.model,
      storage: smartphone.storage,
      soldPrice: soldPrice,
    });

    this.availableSmartphones.splice(index, 1);
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error("There are no available smartphones!");
    }

    return (
      "Upgraded Smartphones:\n" +
      this.availableSmartphones
        .map((smartphone) => {
          smartphone.storage *= 2;
          return `${smartphone.model} / ${smartphone.storage} GB / ${
            smartphone.condition
          } condition / ${smartphone.price.toFixed(2)}$`;
        })
        .join("\n")
    );
  }

  salesJournal(criteria) {
    if (criteria !== "storage" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }

    let sortedSold = [...this.soldSmartphones];
    if (criteria === "storage") {
      sortedSold.sort((a, b) => b.storage - a.storage);
    } else if (criteria === "model") {
      sortedSold.sort((a, b) => a.model.localeCompare(b.model));
    }

    return (
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$` +
      `\n${sortedSold.length} smartphones sold:\n` +
      sortedSold
        .map((s) => `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`)
        .join("\n")
    );
  }
}
