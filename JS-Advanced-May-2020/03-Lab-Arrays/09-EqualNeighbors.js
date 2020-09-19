function solve(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let rightNeighbor = array[i][j + 1];

            if (rightNeighbor !== undefined && rightNeighbor === array[i][j]) {
                count++;
            }

            if (i > 0) {
                let upNeighbor = array[i - 1][j];
                if (upNeighbor !== undefined && upNeighbor === array[i][j]) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}
