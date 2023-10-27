function formatGrade(grade) {
  let description = "";

  if (grade >= 2.0 && grade < 3.0) {
    description = "Fail";
    grade = 2;
  } else if (grade < 3.5) {
    description = "Poor";
  } else if (grade < 4.5) {
    description = "Good";
  } else if (grade < 5.5) {
    description = "Very good";
  } else {
    description = "Excellent";
  }

  console.log(`${description} (${grade.toFixed(grade === 2 ? 0 : 2)})`);
}

// Test Cases
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
