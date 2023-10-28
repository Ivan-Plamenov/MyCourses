function censorWord(text, word) {
  const censor = "*".repeat(word.length);
  const regex = new RegExp(word, "gi");
  const result = text.replace(regex, censor);
  console.log(result);
}
