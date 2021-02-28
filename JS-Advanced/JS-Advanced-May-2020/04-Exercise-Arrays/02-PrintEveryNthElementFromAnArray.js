function solve(array) {
    let lastElement = array.pop();
    console.log(array.filter((_, i) => i % lastElement === 0).join("\n"));
}
