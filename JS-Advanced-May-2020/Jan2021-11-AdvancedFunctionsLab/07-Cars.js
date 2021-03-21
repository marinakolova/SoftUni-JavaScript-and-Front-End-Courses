function solve(arr) {
    const data = {};

    const commands = {
        create: (name, inherits, parentName) =>
            (data[name] = inherits ? Object.create(data[parentName]) : {}),
        set: (name, key, value) => (data[name][key] = value),
        print: name => {
            const result = [];
            for (const key in data[name]) {
                result.push(`${key}:${data[name][key]}`)
            }
            console.log(result.join(", "))
        }
    };

    arr.forEach(x => {
        const [command, name, key, value] = x.split(" ");
        commands[command](name, key, value);
    });
}
