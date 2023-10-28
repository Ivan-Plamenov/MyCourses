function makeDictionary(input) {
  const dictionary = {};

  input.forEach((jsonString) => {
    const obj = JSON.parse(jsonString);
    const [term, definition] = Object.entries(obj)[0];
    dictionary[term] = definition;
  });

  const sortedTerms = Object.keys(dictionary).sort();

  sortedTerms.forEach((term) => {
    const definition = dictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  });
}
