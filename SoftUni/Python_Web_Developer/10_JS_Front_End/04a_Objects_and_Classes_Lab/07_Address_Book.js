function addressBook(input) {
  const addressBook = {};

  input.forEach((entry) => {
    const [name, address] = entry.split(":");
    addressBook[name] = address;
  });

  const sortedNames = Object.keys(addressBook).sort();

  sortedNames.forEach((name) => {
    console.log(`${name} -> ${addressBook[name]}`);
  });
}

// Test Cases
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
