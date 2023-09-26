function circleArea(data) {
    if (typeof data === "number") {
        console.log((Math.PI * data * data).toFixed(2));
    } else {
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof data}.`
        );
    }
}