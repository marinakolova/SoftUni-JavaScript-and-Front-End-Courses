function solve(input) {
    let numAsString = String(input);    
    let sum = 0;
    let firstNum = numAsString[0];
    let isSameNum = true;

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstNum) {
            isSameNum = false;
        }
        sum += parseInt(numAsString[i]);
    }

    console.log(isSameNum);
    console.log(sum);
}
