function wordsUppercase(input) {
    console.log(input.replace(/[^a-zA-Z0-9]/g, " ")
        .toUpperCase()
        .split(" ")
        .filter(x => x.length > 0)
        .join(', '));
}
