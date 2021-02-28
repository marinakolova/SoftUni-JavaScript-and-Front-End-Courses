function solve(input) {
    let products = new Map();

    for (const line of input) {
        let items = line.split(" : ");
        
        let productName = items[0];
        let productPrice = Number(items[1]);
        let firstLetter = productName[0];

        if (!products.get(firstLetter)) {
            products.set(firstLetter, new Map());
        }

        products.get(firstLetter).set(productName, productPrice);
    }

    console.log([...products]
        .sort()
        .map(p => `${p[0]}\n  ${[...p[1]]
            .sort()
            .map(i => `${i[0]}: ${i[1]}`)
            .join("\n  ")}`)
        .join("\n"));
}
