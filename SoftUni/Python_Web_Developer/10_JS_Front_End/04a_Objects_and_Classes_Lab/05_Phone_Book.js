function processPhoneBook(input) {
  const phoneBook = {};

  input.forEach((entry) => {
    const [name, number] = entry.split(" ");

    // Replace the number for duplicate names
    phoneBook[name] = number;
  });

  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

// Test Cases
const phoneBookData = [
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
];

processPhoneBook(phoneBookData);
