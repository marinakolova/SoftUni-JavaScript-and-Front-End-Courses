function solve(array) {
    let result = [];

    array.forEach(element => {
        element < 0 ? result.unshift(element) 
            : result.push(element)
    });

    result.forEach(element => {
        console.log(element);
    })
}
