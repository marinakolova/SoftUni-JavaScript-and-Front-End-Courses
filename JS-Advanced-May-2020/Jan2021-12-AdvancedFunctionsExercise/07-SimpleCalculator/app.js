function calculator() {
    let num1;
    let num2;
    let result;

    return {
        init: (selector1, selector2, resultSelector) => {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () =>
            (result.value = Number(num1.value) + Number(num2.value)),
        subtract: () =>
            (result.value = Number(num1.value) - Number(num2.value))
    }
}
