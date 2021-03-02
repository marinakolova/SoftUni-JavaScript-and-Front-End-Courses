function solve(n, k) {
    let array = [1];

    for (let i = 1; i < n; i++) {
        let currentElement = 0;
        for (let j = 1; j <= k; j++) {            
            currentElement += array[i - j] 
                ? array[i - j] 
                : 0;            
        }

        array[i] = currentElement;
    }

    return array;
}
