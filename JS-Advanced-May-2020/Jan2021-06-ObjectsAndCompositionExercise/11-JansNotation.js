function solve(array) {
    let operands = [];

    function performOperation(num1, num2, operation) {
        let result = {
            '+': num1 + num2,
            '-': num1 - num2,
            '*': num1 * num2,
            '/': num1 / num2, 
        }

        return result[operation];
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof(element) === "number") {
            operands.push(element);
        } else {
            let operator = element;
            
            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                return;                
            }
            let num2 = operands.pop();
            let num1 = operands.pop();

            operands.push(performOperation(num1, num2, operator));
        }
    }    

    if (operands.length === 1) {
        console.log(operands[0]);        
    } else {
        console.log("Error: too many operands!");
    }
}
