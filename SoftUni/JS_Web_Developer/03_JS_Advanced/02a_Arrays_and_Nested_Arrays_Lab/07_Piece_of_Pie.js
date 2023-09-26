function pieceOfPie(arr = [], target1 = "", target2 = "") {
    return arr.slice(arr.indexOf(target1), arr.indexOf(target2) + 1);
}
