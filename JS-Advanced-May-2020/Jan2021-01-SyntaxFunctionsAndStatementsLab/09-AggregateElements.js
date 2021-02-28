function aggregateElements(inputArr) {
    let sum = 0;
    let sumInversed = 0;
    let concated = "";

    for(let i = 0; i < inputArr.length; i++){
        sum += inputArr[i];
        sumInversed += 1 / inputArr[i];
        concated += String(inputArr[i]);
    }

    console.log(sum);
    console.log(sumInversed);
    console.log(concated);
}
