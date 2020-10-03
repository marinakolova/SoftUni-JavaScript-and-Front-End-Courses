function solve(text) {
    let towns = {};

    for (const line of text) {
        let [town, product, countAndPrice] = line.split(" -> ");
        let [count, price] = countAndPrice.split(" : ")
            .map(x => Number(x));

        if (!towns.hasOwnProperty(town)) {
            towns[town] = {};
        }

        if (!towns[town].hasOwnProperty(product)) {
            towns[town][product] = 0;
        }

        towns[town][product] += count * price;
    }

    let result = "";

    for (const townName in towns) {
        const items = towns[townName];

        result += `Town - ${townName}\n`;

        for (const item in items) {
            result += `$$$${item} : ${items[item]}\n`;
        }
    }

    console.log(result);
}
