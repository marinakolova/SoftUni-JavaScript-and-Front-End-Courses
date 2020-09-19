function solve(array) {
    console.log(array
        .filter((_, i) => i % 2 === 1)
        .reverse()
        .map(i => i * 2)
        .join(" "));
}
