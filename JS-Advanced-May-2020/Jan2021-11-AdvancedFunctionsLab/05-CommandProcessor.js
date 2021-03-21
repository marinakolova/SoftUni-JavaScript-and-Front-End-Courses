function solution() {
    return function () {
        let result = '';

        return {
            append: (str) => result += str,
            removeStart: (n) => result = result.slice(Number(n)),
            removeEnd: (n) => result = result.slice(0, result.length - Number(n)),
            print: () => console.log(result)
        }
    }();
}
