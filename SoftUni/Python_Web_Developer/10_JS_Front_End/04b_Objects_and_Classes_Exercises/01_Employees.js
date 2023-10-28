function printEmployeesWithPersonalNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    const employeeName = input[i];
    const personalNum = employeeName.length;

    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
  }
}
