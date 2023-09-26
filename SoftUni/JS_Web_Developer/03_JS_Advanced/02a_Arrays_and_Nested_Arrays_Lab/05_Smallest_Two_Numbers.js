function smallestTwoNumbers(arr = []) {
    let first = Math.min(...arr);
    arr.splice(arr.indexOf(first), 1);
    let second = Math.min(...arr);
    if (first > second) {
        console.log(second, first);
    } else {
        console.log(first, second);
    }
}