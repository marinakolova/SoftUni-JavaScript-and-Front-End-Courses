function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    let result = num1 - num2;
    document.getElementById('result').innerText = result;
}
