function solve(input) {
    let cars = new Map();

    for (const line of input) {
        let items = line.split(" | ");
        let [brand, model, count] = [items[0], items[1], Number(items[2])];

        if (!cars.get(brand)) {
            cars.set(brand, new Map());
        }

        if (!cars.get(brand).get(model)) {
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    console.log([...cars]
        .map(car => `${car[0]}\n${[...car[1]]
            .map(item =>`###${item[0]} -> ${item[1]}`)
            .join("\n")}`)
        .join("\n"));
}
