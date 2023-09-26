function townsToJSON(arr = []) {
    var towns = [];
    arr.shift();
    for (let data of arr) {
        data = data.slice(2, data.length - 2);
        let [town, lat, lon] = data.split(" | ");
        lat = Number(parseFloat(lat).toFixed(2))
        lon = Number(parseFloat(lon).toFixed(2))
        towns.push({ Town: town, Latitude: lat, Longitude: lon });
    }
    console.log(JSON.stringify(towns));
}