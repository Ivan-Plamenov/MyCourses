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
