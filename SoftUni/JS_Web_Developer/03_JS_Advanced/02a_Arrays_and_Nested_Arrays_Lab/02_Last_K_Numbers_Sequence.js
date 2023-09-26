function lastKNumbers(length, lastSum) {
    let numbers = [1];
    let tempArr = [];
    for (let i = 1; i < length; i++) {
        if (numbers.length >= lastSum) {
            tempArr = numbers.slice(-lastSum).reduce((a, b) => a + b, 0);
            numbers.push(tempArr);
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}