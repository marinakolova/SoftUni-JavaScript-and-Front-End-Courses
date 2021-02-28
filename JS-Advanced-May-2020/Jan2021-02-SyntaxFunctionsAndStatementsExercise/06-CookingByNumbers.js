function solve(initialNum, op1, op2, op3, op4, op5) {
    let number = Number(initialNum);

    function performOperation(num, operation) {
        let result = {
            'chop': num / 2,
            'dice': Math.sqrt(num),
            'spice': num + 1,
            'bake': num * 3,
            'fillet': num - 0.2 * num,
        }

        return result[operation];
    }

    for (let i = 1; i < arguments.length; i++) {
        number = performOperation(number, arguments[i]);
        console.log(number);        
    }
}
