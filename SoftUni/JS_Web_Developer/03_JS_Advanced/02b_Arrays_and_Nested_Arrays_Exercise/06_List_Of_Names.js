function listNames(names) {
  names.sort();

  for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}.${names[i]}`);
  }
}
