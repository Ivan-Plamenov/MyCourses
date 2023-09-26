function increasingSubSet(arr = []) {
    let largest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let number of arr) {
        if (number >= largest) {
            largest = number;
            newArr.push(number);
        }
    }
    return newArr;
}