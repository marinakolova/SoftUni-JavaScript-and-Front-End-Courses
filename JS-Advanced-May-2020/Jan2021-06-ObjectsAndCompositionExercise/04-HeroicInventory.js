function solve(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let inputLine = array[i].split(' / ');
        
        let name = inputLine[0];
        let level = Number(inputLine[1]);
        let items = inputLine[2] ? inputLine[2].split(', ') : [];

        let hero = {
            name: name,
            level: level,
            items: items,
        };

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}
