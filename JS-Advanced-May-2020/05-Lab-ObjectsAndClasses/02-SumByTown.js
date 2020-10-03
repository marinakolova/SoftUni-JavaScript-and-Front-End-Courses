function solve(array) {
    let towns = {};

    for (let i = 0; i < array.length; i++) {
        let name = array[i++];

        if (i == array.length) {
            break;
        }

        let income = Number(array[i]);

        if (towns.hasOwnProperty(name)) {
            towns[name] += income;
        } else {
            towns[name] = income;
        }
    }

    console.log(JSON.stringify(towns));
}
