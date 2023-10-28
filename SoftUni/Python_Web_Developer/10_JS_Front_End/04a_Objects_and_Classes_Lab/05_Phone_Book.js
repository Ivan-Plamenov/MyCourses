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
