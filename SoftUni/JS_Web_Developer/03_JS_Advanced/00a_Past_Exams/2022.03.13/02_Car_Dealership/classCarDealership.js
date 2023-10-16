// 92 / 100
class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      typeof model !== "string" ||
      model === "" ||
      typeof horsepower !== "number" ||
      horsepower <= 0 ||
      typeof price !== "number" ||
      price <= 0 ||
      typeof mileage !== "number" ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({
      model,
      horsepower,
      price: parseFloat(price.toFixed(2)),
      mileage: parseFloat(mileage.toFixed(2)),
    });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const index = this.availableCars.findIndex((car) => car.model === model);

    if (index === -1) {
      throw new Error(`${model} was not found!`);
    }

    const car = this.availableCars[index];
    let priceDeduction = 0;

    const mileageDifference = car.mileage - desiredMileage;

    if (mileageDifference > 40000) {
      priceDeduction = 0.1;
    } else if (mileageDifference > 0) {
      priceDeduction = 0.05;
    }

    const soldPrice = parseFloat((car.price * (1 - priceDeduction)).toFixed(2));

    this.soldCars.push({
      model: car.model,
      horsepower: car.horsepower,
      soldPrice: soldPrice,
    });

    this.totalIncome += soldPrice;
    this.availableCars.splice(index, 1);

    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    }

    let result = "-Available cars:\n";
    this.availableCars.forEach((car) => {
      result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
        2
      )} km - ${car.price.toFixed(2)}$\n`;
    });

    return result.trim();
  }

  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }

    if (criteria === "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }

    let result = `-${
      this.name
    } has a total income of ${this.totalIncome.toFixed(2)}$\n`;
    result += `-${this.soldCars.length} cars sold:\n`;

    this.soldCars.forEach((car) => {
      result += `---${car.model} - ${
        car.horsepower
      } HP - ${car.soldPrice.toFixed(2)}$\n`;
    });

    return result.trim();
  }
}
