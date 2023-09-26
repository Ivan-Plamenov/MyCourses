function processOddPositions(arr = []) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i] * 2);
        }
    }
    return newArr.reverse();
}