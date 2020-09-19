function solve(parameter) {
    let size = 5;

    if (typeof(parameter) === 'number') {
        size = parameter;
    }

    for (let row = 1; row <= size; row++) {
        
        let result = "";

        for (let col = 1; col <= size; col++) {

            if (col != size) {
                result += "* ";
            }
            else {
                result += "*";
            }
        }

        console.log(result);
    }
}
