function calorieObject(arr = []) {
    var register = {};
    for (let i = 0; i < arr.length; i += 2) {
        if (i % 2 == 0) {
            register[arr[i]] = Number(arr[i + 1]);
        }
    }
    console.log(register);
}