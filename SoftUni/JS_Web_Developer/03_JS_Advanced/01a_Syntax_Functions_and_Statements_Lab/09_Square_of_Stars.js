function squareOfStars(side = 5) {
    let row = "";
    for (let i = 0; i < side; i++) {
        row += "* ";
    }
    for (let i = 0; i < side; i++) {
        console.log(row);
    }
}