function solve(array) {
    let result = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let element = array[row][col];
            
            let right = array[row][col + 1];
            if (right && right === element) {
                result++;
            }

            if (row !== array.length - 1) {
                let down = array[row + 1][col];

                if (down && down === element) {
                    result++;
                }
            }
        }        
    }

    return result;
}
