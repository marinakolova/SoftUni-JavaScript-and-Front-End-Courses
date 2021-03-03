function solve(array, num) {
    for (let i = 0; i < num; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(" "));
}
