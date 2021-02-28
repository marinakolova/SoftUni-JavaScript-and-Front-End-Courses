function solve(array) {
    console.log(array
        .sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))
        .join("\n"));
}
