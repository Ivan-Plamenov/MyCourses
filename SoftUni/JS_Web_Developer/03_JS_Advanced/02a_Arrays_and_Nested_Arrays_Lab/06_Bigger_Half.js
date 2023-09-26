function biggerHalf(arr = []) {
    arr = arr.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    if (arr.length % 2 === 0) {
        return arr.slice(arr.length / 2, arr.length);
    } else {
        return arr.slice(Math.floor(arr.length / 2), arr.length);
    }
}