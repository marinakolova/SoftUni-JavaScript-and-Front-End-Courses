function solve(jsonData, criteria) {
    const data = JSON.parse(jsonData);
    
    function printResult(arr) {
        arr.forEach((el, i) => {
            console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
        });
    };

    if (criteria.split('-')[1] === 'all') {
        printResult(data);
    } else {
        printResult(data.filter((v, _) =>
            v[criteria.split('-')[0]] === criteria.split('-')[1]));
    }
}
