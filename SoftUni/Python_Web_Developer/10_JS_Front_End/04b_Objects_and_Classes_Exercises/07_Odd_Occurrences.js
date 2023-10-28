function oddOccurrences(input) {
  const words = input.toLowerCase().split(" ");
  const wordCount = {};

  for (const word of words) {
    if (!wordCount.hasOwnProperty(word)) {
      wordCount[word] = 0;
    }
    wordCount[word]++;
  }

  const oddWords = [];

  for (const word in wordCount) {
    if (wordCount[word] % 2 !== 0) {
      oddWords.push(word);
    }
  }

  console.log(oddWords.join(" "));
}
