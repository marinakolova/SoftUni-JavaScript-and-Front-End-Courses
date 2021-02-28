function solve(num1, num2, operator) {
    let result = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 % num2,
        '**': num1 ** num2,
    };

    console.log(result[operator]);
}
