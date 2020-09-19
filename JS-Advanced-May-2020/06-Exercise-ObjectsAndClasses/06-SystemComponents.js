function solve(input) {
    let components = new Map();

    for (const line of input) {
        let items = line.split(" | ");
        let [system, component, subcomponent] = [items[0], items[1], items[2]];

        if (!components.get(system)) {
            components.set(system, new Map());
        }

        let setOfSubcomponent = components.get(system).get(component);

        if (!setOfSubcomponent) {
            components.get(system).set(component, []);
            setOfSubcomponent = components.get(system).get(component);
        }

        setOfSubcomponent.push(subcomponent);
    }

    console.log([...components]
        .sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]))
        .map(s => `${s[0]}\n${[...s[1]]
            .sort((a, b) => b[1].length - a[1].length)
            .map(i =>`|||${i[0]}\n${[...i[1]]
                .map(c =>`||||||${c}`)
                .join("\n")}`)
            .join("\n")}`)
        .join("\n"));
}
