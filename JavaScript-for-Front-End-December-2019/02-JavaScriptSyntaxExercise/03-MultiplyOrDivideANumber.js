function multiplyOrDivide(arr){
    let numN = +arr[0];
    let numX = +arr[1];
    let result = 0;

    if (numX >= numN) {
        result = numN * numX;
    }
    else if (numN > numX) {
        result = numN / numX;
    }

    console.log(result);
}