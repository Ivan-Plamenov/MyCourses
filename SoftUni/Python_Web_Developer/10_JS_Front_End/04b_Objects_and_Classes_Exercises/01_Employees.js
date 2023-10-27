function printEmployeesWithPersonalNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    const employeeName = input[i];
    const personalNum = employeeName.length;

    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
  }
}

// Test Cases
const employees1 = [
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
];

printEmployeesWithPersonalNumbers(employees1);

const employees2 = [
  "Samuel Jackson",
  "Will Smith",
  "Bruce Willis",
  "Tom Holland",
];

printEmployeesWithPersonalNumbers(employees2);
