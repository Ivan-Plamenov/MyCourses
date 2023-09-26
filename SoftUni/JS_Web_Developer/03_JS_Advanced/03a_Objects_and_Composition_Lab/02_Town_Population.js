function townPopulation(data) {
    var map = new Map();
    for (let line of data) {
        let town = line.split(" <-> ")[0];
        let population = Number(line.split(" <-> ")[1]);
        if (!map.has(town)) {
            map.set(town, population);
        } else {
            map.set(town, map.get(town) + population);
        }
    }
    for (const [key, value] of map) {
        console.log(`${key} : ${value}`);
    }
}