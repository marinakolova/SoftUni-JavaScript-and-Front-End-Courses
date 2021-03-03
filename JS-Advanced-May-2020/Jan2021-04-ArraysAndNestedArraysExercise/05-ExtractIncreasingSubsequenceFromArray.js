function solve(array) {
    let currNum = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < currNum) {
            array.splice(i, 1);
            i--;
        } else {
            currNum = array[i];
        }
    }

    return array;
}
