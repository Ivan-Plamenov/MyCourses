function cityTaxes(name, population, treasury) {
    var city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function (/** @type {number} */ percentage) {
            this.population += this.population * (percentage / 100);
        },
        applyRecession: function (/** @type {number} */ percentage) {
            this.treasury -= this.treasury * (percentage / 100);
        },
    };
    return city;
}
