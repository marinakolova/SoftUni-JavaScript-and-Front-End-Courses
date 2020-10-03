function solve(input) {
    let gladiators = new Map();

    for (const line of input) {
        if (line == "Ave Cesar") {
            break;
        }

        let items = line.split(" -> ");

        if (items.length > 2) {
            let [gladiator, technique, skill] = [items[0], items[1], Number(items[2])];

            if (!gladiators.get(gladiator)) {
                gladiators.set(gladiator, new Map());
            }
            if (!gladiators.get(gladiator).get(technique)) {
                gladiators.get(gladiator).set(technique, 0);
            }
            if (gladiators.get(gladiator).get(technique) < skill) {
                gladiators.get(gladiator).set(technique, skill);
            }
        } else {
            items = line.split(" vs ");
            let [gladiator1, gladiator2] = [items[0], items[1]];

            if (gladiators.get(gladiator1) && gladiators.get(gladiator2)) {
                let targetTechnique = [...gladiators.get(gladiator1)]
                    .map(i => i[0])
                    .find(item => [...gladiators.get(gladiator2)]
                        .map(i => i[0])
                        .includes(item));

                if (targetTechnique) {
                    let gladiator1Points = gladiators.get(gladiator1).get(targetTechnique);
                    let gladiator2Points = gladiators.get(gladiator2).get(targetTechnique);

                    if (gladiator1Points > gladiator2Points) {
                        gladiators.delete(gladiator2);
                    } else {
                        gladiators.delete(gladiator1);
                    }
                }
            }
        }
    }

    let result = [...gladiators]
        .filter(x => [...x[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0) > 0)
        .sort((a, b) => [...b[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0
            ) - [...a[1]]
            .reduce((tot, arr) =>
                tot + arr[1], 0) ||
            a[0].localeCompare(b[0]));

    for (const gladiator of result) {
        console.log(`${gladiator[0]}: ${[...gladiator[1]].reduce((tot, arr) => tot + arr[1], 0)} skill`);

        for (const item of [...gladiator[1]].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
            console.log(`- ${item[0]} <!> ${item[1]}`);
        }
    }
}
