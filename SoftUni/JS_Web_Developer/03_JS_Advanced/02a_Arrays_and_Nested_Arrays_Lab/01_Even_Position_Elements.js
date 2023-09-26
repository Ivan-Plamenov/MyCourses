function evenPositionElements(arr = []) {
    arr = arr.filter((element) => arr.indexOf(element) % 2 === 0);
    console.log(arr.join(" "));
}
