function calculateCircleArea(input) {
  if (typeof input === "number") {
    // Calculate the circle area and round it to two decimal places
    const area = Math.PI * Math.pow(input, 2);
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}

// Test Cases
calculateCircleArea(5); // Output: 78.54
calculateCircleArea("name"); // Output: We can not calculate the circle area, because we receive a string.
