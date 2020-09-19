function stringLength(str1, str2, str3) {    
    
    let length1 = str1.length;
    let length2 = str2.length;
    let length3 = str3.length;
    
    let sum = length1 + length2 + length3;
    let averageLength = (length1 + length2 + length3) / 3;

    console.log(sum);
    console.log(Math.floor(averageLength));
}
