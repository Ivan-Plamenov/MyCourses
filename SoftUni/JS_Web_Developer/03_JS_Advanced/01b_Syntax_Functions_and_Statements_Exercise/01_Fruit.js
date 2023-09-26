function fruit(name = "", grams = 0, price = 0) {
    var kg = grams / 1000;
    console.log(
        `I need $${(price * kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${name}.`
    );
}
