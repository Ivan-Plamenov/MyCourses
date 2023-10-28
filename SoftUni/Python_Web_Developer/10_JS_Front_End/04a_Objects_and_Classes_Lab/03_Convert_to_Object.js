function convertAndPrint(jsonString) {
  const obj = JSON.parse(jsonString);

  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
