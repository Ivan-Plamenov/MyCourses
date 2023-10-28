function piccolo(input) {
  const parkingLot = new Set();

  for (const entry of input) {
    const [action, carNumber] = entry.split(", ");

    if (action === "IN") {
      parkingLot.add(carNumber);
    } else if (action === "OUT" && parkingLot.has(carNumber)) {
      parkingLot.delete(carNumber);
    }
  }

  if (parkingLot.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    const sortedCars = Array.from(parkingLot).sort();
    console.log(sortedCars.join("\n"));
  }
}
