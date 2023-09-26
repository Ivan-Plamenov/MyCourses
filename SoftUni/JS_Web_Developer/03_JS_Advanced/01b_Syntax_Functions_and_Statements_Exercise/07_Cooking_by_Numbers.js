function cookingByNumbers(number = 0, op1 = "", op2 = "", op3 = "", op4 = "", op5 = "") {
    var operations = [op1, op2, op3, op4, op5];
    operations.forEach((operation) => {
        switch (operation) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            default:
                number *= 0.8;
                console.log(number);
                break;
        }
    });
}