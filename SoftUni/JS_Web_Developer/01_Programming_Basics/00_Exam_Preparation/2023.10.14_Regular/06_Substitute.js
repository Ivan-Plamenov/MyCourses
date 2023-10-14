// 100/100
function validShifts(input) {
  const K = parseInt(input[0]);
  const L = parseInt(input[1]);
  const M = parseInt(input[2]);
  const N = parseInt(input[3]);

  let changesCount = 0;
  for (let i = parseInt(K); i <= 8; i++) {
    for (let j = 9; j >= parseInt(L); j--) {
      let number1 = i + "" + j;

      for (let a = parseInt(M); a <= 8; a++) {
        for (let b = 9; b >= parseInt(N); b--) {
          let number2 = a + "" + b;

          if (i % 2 == 0 && a % 2 == 0 && j % 2 == 1 && b % 2 == 1) {
            if (number1 == number2) {
              console.log("Cannot change the same player.");
            } else {
              console.log(number1 + " - " + number2);
              changesCount++;
              if (changesCount == 6) {
                return;
              }
            }
          }
        }
      }
    }
  }
}
