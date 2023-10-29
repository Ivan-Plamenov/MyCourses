function garage(input) {
  const garages = {};

  for (const line of input) {
    const [garageNumber, carInfo] = line.split(" - ");
    const garageExists = garages.hasOwnProperty(garageNumber);

    if (!garageExists) {
      garages[garageNumber] = [];
    }

    garages[garageNumber].push(carInfo);
  }

  const sortedGarageNumbers = Object.keys(garages).sort((a, b) => a - b);

  for (const garageNumber of sortedGarageNumbers) {
    const cars = garages[garageNumber];
    console.log(`Garage № ${garageNumber}`);
    cars.forEach((car) => {
      const carInfo = car.split(", ").map((info) => info.replace(": ", " - "));
      console.log(`--- ${carInfo.join(", ")}`);
    });
  }
}
