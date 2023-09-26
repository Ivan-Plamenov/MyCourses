function lowestPrice(arr = []) {
    var map = new Map();
    for (let line of arr) {
        let [town, product, price] = line.split(" | ");
        if (!map.has(product)) {
            map.set(product, [price, town]);
        } else {
            if (map.get(product)[1] === town) {
                map.set(product, [price, town]);
            } else if (Number(map.get(product)[0]) > Number(price)) {
                map.set(product, [price, town]);
            }
        }
    }
    for (const [key, value] of map) {
        console.log(`${key} -> ${value[0]} (${value[1]})`);
    }
}