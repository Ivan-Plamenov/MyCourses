function listOfNames(arr = []) {
    arr = arr.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    arr.forEach((name) => console.log(`${arr.indexOf(name) + 1}.${name}`));
}