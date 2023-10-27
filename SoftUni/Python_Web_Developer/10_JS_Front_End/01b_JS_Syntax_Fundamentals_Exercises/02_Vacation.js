function calculateVacationPrice(peopleCount, groupType, dayOfWeek) {
  let pricePerPerson = 0;
  let totalPrice = 0;

  switch (groupType) {
    case "Students":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 8.45;
          break;
        case "Saturday":
          pricePerPerson = 9.8;
          break;
        case "Sunday":
          pricePerPerson = 10.46;
          break;
      }
      break;
    case "Business":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 10.9;
          break;
        case "Saturday":
          pricePerPerson = 15.6;
          break;
        case "Sunday":
          pricePerPerson = 16.0;
          break;
      }
      break;
    case "Regular":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 15.0;
          break;
        case "Saturday":
          pricePerPerson = 20.0;
          break;
        case "Sunday":
          pricePerPerson = 22.5;
          break;
      }
      break;
  }

  totalPrice = peopleCount * pricePerPerson;

  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice *= 0.85; // 15% discount for students with 30 or more people
  } else if (groupType === "Business" && peopleCount >= 100) {
    totalPrice -= 10 * pricePerPerson; // 10 people can stay for free for business with 100 or more people
  } else if (
    groupType === "Regular" &&
    peopleCount >= 10 &&
    peopleCount <= 20
  ) {
    totalPrice *= 0.95; // 5% discount for regular with 10-20 people
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// Test Cases
calculateVacationPrice(30, "Students", "Sunday"); // Output: Total price: 266.73
calculateVacationPrice(40, "Regular", "Saturday"); // Output: Total price: 800.00
