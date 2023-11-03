class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }

    const plant = {
      plantName: plantName,
      spaceRequired: spaceRequired,
      ripe: false,
      quantity: 0,
    };

    this.plants.push(plant);
    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    const plant = this.plants.find((p) => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    plant.ripe = true;
    plant.quantity = quantity;

    return quantity === 1
      ? `${quantity} ${plantName} has successfully ripened.`
      : `${quantity} ${plantName}s have successfully ripened.`;
  }

  harvestPlant(plantName) {
    const plantIndex = this.plants.findIndex((p) => p.plantName === plantName);

    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    const plant = this.plants[plantIndex];

    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants.splice(plantIndex, 1);
    this.storage.push({
      plantName: plant.plantName,
      quantity: plant.quantity,
    });
    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let report = `The garden has ${this.spaceAvailable} free space left.`;

    const plantsInGarden = this.plants
      .map((p) => p.plantName)
      .sort()
      .join(", ");
    report += `\nPlants in the garden: ${
      plantsInGarden.length > 0 ? plantsInGarden : "none"
    }`;

    if (this.storage.length === 0) {
      report += "\nPlants in storage: The storage is empty.";
    } else {
      const plantsInStorage = this.storage
        .map((p) => `${p.plantName} (${p.quantity})`)
        .join(", ");
      report += `\nPlants in storage: ${plantsInStorage}`;
    }

    return report;
  }
}
