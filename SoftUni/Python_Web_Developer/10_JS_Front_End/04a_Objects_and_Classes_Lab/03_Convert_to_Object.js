function convertAndPrint(jsonString) {
  const obj = JSON.parse(jsonString);

  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// Test Cases
const jsonString1 = '{"name": "George", "age": 40, "town": "Sofia"}';
convertAndPrint(jsonString1);

const jsonString2 = '{"name": "Peter", "age": 35, "town": "Plovdiv"}';
convertAndPrint(jsonString2);
