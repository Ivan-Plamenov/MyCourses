function printCharactersInRange(char1, char2) {
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let result = "";
  for (let i = start + 1; i < end; i++) {
    result += String.fromCharCode(i) + " ";
  }

  console.log(result);
}

// Test Cases
printCharactersInRange("a", "d"); // Output: "b c "
printCharactersInRange("#", ":"); // Output: "$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 "
printCharactersInRange("C", "#"); // Output: "$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B "
