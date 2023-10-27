function printStudentInfo(name, age, grade) {
  // Format the grade to two decimal points
  var formattedGrade = grade.toFixed(2);

  // Print the student's information in the specified format
  console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

// Test Cases
printStudentInfo("John", 15, 5.54678); // Output: Name: John, Age: 15, Grade: 5.55
printStudentInfo("Steve", 16, 2.1426); // Output: Name: Steve, Age: 16, Grade: 2.14
printStudentInfo("Marry", 12, 6.0); // Output: Name: Marry, Age: 12, Grade: 6.00
