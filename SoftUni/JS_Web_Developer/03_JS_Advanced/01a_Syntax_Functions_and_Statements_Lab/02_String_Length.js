function length(str1, str2, str3) {
    var data = [str1, str2, str3];
    let sum = 0;
    data.forEach((element) => (sum += element.length));
    console.log(sum);
    console.log(parseInt(sum / data.length));
}
