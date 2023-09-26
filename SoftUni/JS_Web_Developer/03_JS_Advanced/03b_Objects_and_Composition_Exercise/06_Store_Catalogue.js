function storeCatalogue(arr = []) {
    var catalogue = [];
    let letter = "";
    arr.forEach((element) => catalogue.push(element.split(" : ")));
    catalogue.sort((a, b) => (a > b ? 1 : -1));

    catalogue.forEach((element) => {
        if (element[0][0] !== letter) {
            letter = element[0][0];
            console.log(letter);
        }
        console.log(`  ${element[0]}: ${element[1]}`);
    });
}
