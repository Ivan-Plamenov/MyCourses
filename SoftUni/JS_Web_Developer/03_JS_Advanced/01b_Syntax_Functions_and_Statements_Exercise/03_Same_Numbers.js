function sameNumbers(num = 0) {
    const str = String(num);
    let sum = 0;
    let common = str[0];
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== common) {
            flag = false;
        }
        sum += Number(str[i]);
    }
    console.log(flag);
    console.log(sum);
    
}