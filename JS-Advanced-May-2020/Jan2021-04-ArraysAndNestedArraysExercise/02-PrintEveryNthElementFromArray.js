function solve(array, step) {
    let result = [];
    
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return result;
}
