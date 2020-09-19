function solve(array) {
    console.log(array
        .filter((v, i) => v >= Math.max(null, ...array.slice(0, i)))
        .join("\n"));
}
