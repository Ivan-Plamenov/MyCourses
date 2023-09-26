function aggregateElements(arr = []) {
    let inverseSum = 0;
    console.log(arr.reduce((a, b) => a + b, 0));
    for (let element of arr) {
        inverseSum += 1 / element;
    }
    console.log(inverseSum);
    console.log(arr.join(""));
}