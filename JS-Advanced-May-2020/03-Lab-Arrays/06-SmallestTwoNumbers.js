function solve(array) {
    console.log(array
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(" "));
}
