function productOfThree(arr) {
    
    let countOfNegativeNums = 0;
    let hasZeroNum = false;
    let result = "";

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
        if (element == 0) {
            hasZeroNum = true;
        } else if (+element < 0) {
            countOfNegativeNums++;
        }
    }

    if (hasZeroNum) {
        result = "Positive";
    } else if (countOfNegativeNums % 2 == 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);
}