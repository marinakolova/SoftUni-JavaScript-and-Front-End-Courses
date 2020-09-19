function solve(array) {
    let count = array.pop();

    for (let i = 0; i < count % array.length; i++) {
        let temp = array.pop();
        array.unshift(temp);
    }

    console.log(array.join(" "));
}
