function solve(data) {
    let obj = {};

    for (const currentObject of JSON.parse(data)) {
        for (const key of Object.keys(currentObject)) {
            if (!Object.keys(obj).includes(key)) {
                obj[key] = currentObject[key];
            }
        }
    }

    return obj;
}
