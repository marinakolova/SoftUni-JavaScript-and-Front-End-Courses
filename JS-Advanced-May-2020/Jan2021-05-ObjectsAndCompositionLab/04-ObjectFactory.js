function solve(library, orders) {
    let result = [];

    for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        const newOrder = {
            name: element.template.name,
        };

        for (let j = 0; j < element.parts.length; j++) {
            const part = element.parts[j];
            newOrder[part] = library[part];
        }

        result.push(newOrder);
    }

    return result;
}
