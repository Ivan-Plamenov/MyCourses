function login(input) {
  const username = input[0];
  const correctPassword = username.split("").reverse().join("");
  let attempts = 0;

  for (let i = 1; i < input.length; i++) {
    const password = input[i];

    if (password === correctPassword) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      attempts++;
      if (attempts === 4) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}

// Test Cases
const input1 = ["Acer", "login", "go", "let me in", "recA"];
login(input1);

const input2 = ["momo", "omom"];
login(input2);

const input3 = ["sunny", "rainy", "cloudy", "sunny", "not sunny"];
login(input3);
