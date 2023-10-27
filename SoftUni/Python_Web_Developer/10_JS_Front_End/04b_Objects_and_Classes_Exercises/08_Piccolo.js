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

// Test Cases
const input1 = [
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
];

const input2 = [
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
];

piccolo(input1);
piccolo(input2);
