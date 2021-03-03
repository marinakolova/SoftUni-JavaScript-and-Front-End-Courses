function solve(array) {
    array.sort().forEach((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
} 

// judge score: 80/100
