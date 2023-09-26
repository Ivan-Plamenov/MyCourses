function negativePositiveNumbers(arr = []) {
    let newArr = [];
    arr.forEach((element) =>
        element < 0 ? newArr.unshift(element) : newArr.push(element)
    );
    newArr.forEach((element) => console.log(element));
}