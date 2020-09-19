function solve(array) {
    let result = [];
    let pattern = "";

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (i % 2 == 0) {
            pattern += element + ": ";
        }
        else {
            pattern += Number(element);
            result.push(pattern);
            pattern = "";
        }
    }

    console.log(`{ ${result.join(', ')} }`);
}
