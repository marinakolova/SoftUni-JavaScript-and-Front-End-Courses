function solve(array) {
    console.log(array
        .filter((_, i) => i % 2 === 0)
        .join(" "));
}
