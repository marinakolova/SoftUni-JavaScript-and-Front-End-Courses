function solve(array) {
    let num = 0;
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        num++;
        
        if (array[i] === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
    }

    if (result.length > 0) {
        result.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }    
}
