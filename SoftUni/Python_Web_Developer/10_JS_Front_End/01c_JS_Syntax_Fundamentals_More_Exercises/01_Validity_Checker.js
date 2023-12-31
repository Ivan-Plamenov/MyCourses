function validityChecker(x1, y1, x2, y2) {
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function isDistanceValid(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return Number.isInteger(distance);
  }

  const point1ToOriginValid = isDistanceValid(x1, y1, 0, 0);
  const point2ToOriginValid = isDistanceValid(x2, y2, 0, 0);
  const point1ToPoint2Valid = isDistanceValid(x1, y1, x2, y2);

  if (point1ToOriginValid) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (point2ToOriginValid) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (point1ToPoint2Valid) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
