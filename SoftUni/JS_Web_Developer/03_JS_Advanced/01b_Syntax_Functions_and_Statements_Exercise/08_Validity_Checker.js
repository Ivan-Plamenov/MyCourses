function distanceValidityChecker(x1, y1, x2, y2) {
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  function checkValidDistance(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return Number.isInteger(distance);
  }

  function printValidity(x1, y1, x2, y2) {
    if (checkValidDistance(x1, y1, x2, y2)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }

  printValidity(x1, y1, 0, 0);
  printValidity(x2, y2, 0, 0);
  printValidity(x1, y1, x2, y2);
}
