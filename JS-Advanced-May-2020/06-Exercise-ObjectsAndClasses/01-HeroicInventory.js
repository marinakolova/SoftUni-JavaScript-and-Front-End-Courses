function solve(input) {
    let heroData = new Array();

    for (let i = 0; i < input.length; i++) {
        const items = input[i].split(" / ");

        let heroName = items[0];
        let heroLevel = Number(items[1]);
        let heroItems = new Array();

        if (items.length > 2) {
            heroItems = items[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroData.push(hero);        
    }

    console.log(JSON.stringify(heroData));
}
