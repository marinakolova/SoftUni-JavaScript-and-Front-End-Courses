function solve(a, b) {
    let gcd = 1;
    let smallerNum = Math.min(a, b);

    for(let i = 1; i <= smallerNum; i++) {
        if (a % i === 0 && b % i === 0) {
            if (i > gcd) {
                gcd = i;                
            }
        }
    }

    console.log(gcd);
}
