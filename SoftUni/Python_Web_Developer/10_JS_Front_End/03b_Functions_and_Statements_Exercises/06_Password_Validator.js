function validatePassword(password) {
  let isValid = true;
  let digitsCount = 0;

  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
  }

  for (let char of password) {
    if (/\d/.test(char)) {
      digitsCount++;
    }
  }

  if (digitsCount < 2) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  }
}
