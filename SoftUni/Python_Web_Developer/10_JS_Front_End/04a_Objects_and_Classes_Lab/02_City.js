function printObjectProperties(obj) {
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
