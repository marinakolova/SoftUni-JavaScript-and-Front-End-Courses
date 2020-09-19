function arrElements(inputArr) {
    
    let myArr = [];
    
    for (let index = 0; index < +inputArr[0]; index++) {
        myArr.push(0);
    }

    inputArr.shift();

    while (inputArr.length > 0) {
        
        let indexValuePair = inputArr.shift();

        let index = indexValuePair[0];
        let value = indexValuePair[indexValuePair.length - 1];

        if (indexValuePair[indexValuePair.length - 2] != " ") {
            value = indexValuePair[indexValuePair.length - 2] + indexValuePair[indexValuePair.length - 1];
        }

        myArr[index] = value;
    }

    myArr.forEach(element => {
        console.log(element);
    });
}

//arrElements(["3", "0 - 5", "1 - 6", "2 - 7"]);