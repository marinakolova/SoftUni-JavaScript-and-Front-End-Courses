function solve(array) {
    let result = {};

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let calories = Number(array[i + 1]);

        result[food] = calories;
    }

    console.log(result);
}
