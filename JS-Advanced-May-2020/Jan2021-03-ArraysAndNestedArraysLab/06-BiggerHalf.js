function solve(array) {
    return array.sort((a, b) => a - b)
        .slice(Math.floor(array.length / 2));
}
