function biggestElement(arr = []) {
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach((subArr) => {
        let current = Math.max(...subArr);
        if (current > max) {
            max = current;
        }
    });
    return max;
}