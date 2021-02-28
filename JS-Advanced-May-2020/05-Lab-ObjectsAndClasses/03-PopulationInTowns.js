function solve(array) {
    let towns = {};

    for (const line of array) {
        let items = line.split(" <-> ");

        if (!towns.hasOwnProperty(items[0])) {
            towns[items[0]] = 0;
        }

        towns[items[0]] += Number(items[1]);
    }

    for (const key in towns) {
        if (towns.hasOwnProperty(key)) {
            const element = towns[key];
            console.log(`${key} : ${element}`);
        }
    }
}
