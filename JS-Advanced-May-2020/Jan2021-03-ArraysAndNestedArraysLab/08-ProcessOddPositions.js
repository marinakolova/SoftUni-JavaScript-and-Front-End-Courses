function solve(array) {
    return array
        .filter((_, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(" ");
}
