function solve(array) {
    let result = new Map();

    for (let i = 0; i < array.length; i++) {
        let inputLine = array[i].split(' : ');
        
        let product = inputLine[0];
        let price = Number(inputLine[1]);

        let firstLetter = product.charAt(0);

        if (!result.get(firstLetter)) {
            result.set(firstLetter, new Map());
        }

        result.get(firstLetter).set(product, price);
    }

    console.log([...result]
        .sort()
        .map(p => `${p[0]}\n  ${[...p[1]]
            .sort()
            .map(i => `${i[0]}: ${i[1]}`)
            .join("\n  ")}`)
        .join("\n"));
}
