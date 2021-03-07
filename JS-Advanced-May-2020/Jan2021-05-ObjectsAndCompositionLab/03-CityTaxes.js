function solve(inputName, inputPopulation, inputTreasury) {
    let city = {
        name: inputName,
        population: inputPopulation,
        treasury: inputTreasury,
        taxRate: 10,
        collectTaxes: function() { 
            this.treasury += this.population * this.taxRate 
        },
        applyGrowth: function(percentage) {
            this.population += percentage/100 * this.population;
        },
        applyRecession: function(percentage) {
            this.treasury -= percentage/100 * this.treasury;
        }
    };

    return city;
}
