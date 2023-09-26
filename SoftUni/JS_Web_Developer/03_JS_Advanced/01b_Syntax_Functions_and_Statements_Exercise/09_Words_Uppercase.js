function wordsUppercase(string) {
    let words = [];
    words.push(string.match(/\b\w+/g));
    console.log(words[0].join(", ").toUpperCase());
}
