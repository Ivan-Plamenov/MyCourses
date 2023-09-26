function sortingNumbers(arr = []) {
    var newArr = [];
    while (arr.length > 0) {
        let currentMin = Math.min(...arr);
        newArr.push(currentMin);
        arr.splice(arr.indexOf(currentMin), 1);
        if (arr.length === 0) {
            break;
        }
        let currentMax = Math.max(...arr);
        newArr.push(currentMax);
        arr.splice(arr.indexOf(currentMax), 1);
    }
    return newArr;
}