function arrayMap(array, func) {
    return array.reduce((a, b) => a.concat(func(b)), []);
}
