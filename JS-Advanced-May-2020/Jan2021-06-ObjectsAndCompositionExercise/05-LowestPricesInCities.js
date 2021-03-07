function solve(array) {
    let result = new Map();

    for (let i = 0; i < array.length; i++) {
        let inputLine = array[i].split(' | ');
        
        let town = inputLine[0];
        let product = inputLine[1];
        let price = Number(inputLine[2]);

        if (!result.get(product)) {
            result.set(product, new Map());
        }

        result.get(product).set(town, price);
    }

    for (const productWithPrice of result) {
        let lowestPrice = [...productWithPrice[1]].sort((a, b) => a[1] - b[1])[0]; // [a, [b, c]]
        console.log(`${productWithPrice[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }
}
