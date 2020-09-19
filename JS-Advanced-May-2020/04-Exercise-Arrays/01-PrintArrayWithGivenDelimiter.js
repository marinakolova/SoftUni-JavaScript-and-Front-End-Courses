function solve(array) {
    console.log(array.slice(0, -1).join(array.splice(-1, 1)));
}
