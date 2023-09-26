function carFactory({ model, power, color, carriage, wheelsize }) {
    var produced = {};

    const smallEngine = { power: 90, volume: 1800 };
    const medEngine = { power: 120, volume: 2400 };
    const monEngine = { power: 200, volume: 3500 };
    var chassisHatch = { type: "hatchback", color: "as required" };
    var chassisCoupe = { type: "coupe", color: "as required" };

    produced.model = model;
    if (power <= 90) {
        produced.engine = smallEngine;
    } else if (power > 90 && power <= 120) {
        produced.engine = medEngine;
    } else {
        produced.engine = monEngine;
    }
    if (carriage === "hatchback") {
        chassisHatch.color = color;
        produced.carriage = chassisHatch;
    } else {
        chassisCoupe.color = color;
        produced.carriage = chassisCoupe;
    }
    if (wheelsize % 2 !== 0) {
        produced.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        produced.wheels = [
            wheelsize - 1,
            wheelsize - 1,
            wheelsize - 1,
            wheelsize - 1,
        ];
    }
    
    return produced;
}