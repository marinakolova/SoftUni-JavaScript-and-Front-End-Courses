function solve(array) {
    array.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()));
    array.forEach(element => {
        console.log(element);
    });    
}
