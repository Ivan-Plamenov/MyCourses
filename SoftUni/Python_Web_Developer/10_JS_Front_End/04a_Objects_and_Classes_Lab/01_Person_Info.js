function createPersonInfo(firstName, lastName, age) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

// Test Cases
const person1 = createPersonInfo("Peter", "Pan", "20");
console.log(person1);

const person2 = createPersonInfo("George", "Smith", "18");
console.log(person2);
