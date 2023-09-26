function sumNumbers(input) {
    let n = Number(input[0]);
    let sum = Number(input[1]);
    let index = 2;

    while (n >= sum) {
        sum += Number(input[index]);
        if (sum === n) {
            break;
        }
        index++;
    }
    console.log(sum);
}