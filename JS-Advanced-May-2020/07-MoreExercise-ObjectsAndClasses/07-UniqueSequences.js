function solve(input) {
    let arrays = [];
    let items = input.map(i => JSON.parse(i));

    for (const array of items) {
        let sum = array.reduce((a, b) => a + b, 0);

        if (!arrays.some((x) => x.reduce((a, b) => a + b, 0) === sum)) {
            arrays.push(array);
        }
    }

    console.log(arrays
        .sort((a, b) => a.length - b.length)
        .map(array => `[${array
            .sort((a, b)=>b - a)
            .join(", ")}]`)
        .join("\n"));
}
