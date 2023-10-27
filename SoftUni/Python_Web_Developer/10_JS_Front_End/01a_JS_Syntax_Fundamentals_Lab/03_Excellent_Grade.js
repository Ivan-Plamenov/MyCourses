function checkGrade(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

// Test Cases
checkGrade(5.5); // Output: Excellent
checkGrade(4.35); // Output: Not excellent
