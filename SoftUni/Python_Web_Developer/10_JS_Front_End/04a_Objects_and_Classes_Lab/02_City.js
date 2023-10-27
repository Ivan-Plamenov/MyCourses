function printObjectProperties(obj) {
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

// Test Cases
const city1 = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
};
printObjectProperties(city1);

const city2 = {
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
};
printObjectProperties(city2);
