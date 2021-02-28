function solve() {
    const table = document.getElementsByTagName('table')[0];
    const check = document.getElementById('check').firstElementChild;
    const rows = Array.from(table.getElementsByTagName('tbody')[0].children);
    const buttons = table.getElementsByTagName('button');

    const MIN_VALUE = 1;
    const MAX_VALUE = rows[0].children.length;

    const matrix = rows.reduce((acc, td) => {
        acc.push(Array.from(td.children).map(e => e.firstElementChild));
        return acc;
    }, []);

    buttons[0].style.cursor = 'pointer';
    buttons[1].style.cursor = 'pointer';

    buttons[0].addEventListener('click', () => {doFormat(checkMatrix())});
    buttons[1].addEventListener('click', clearMatrix);

    function checkMatrix() {
        const rows = matrix.map(row => row.map(e => Number(e.value)));
        const cols = [];
        for (let i = 0; i < MAX_VALUE; i++) {
            cols.push(rows.map(row => row[i]))
        }
        return !rows.some(isInvalid) && !cols.some(isInvalid);
    }

    function isInvalid(array) {
        const invalidValue = (v) => !(v >= MIN_VALUE && v <= MAX_VALUE);
        return array.length !== MAX_VALUE || array.some(invalidValue) || (new Set(array)).size !== array.length;
    }

    function clearMatrix() {
        matrix.forEach(row => row.forEach(e => e.value = ''));
        doFormat(false, true)
    }

    function doFormat(flag, clear) {
        if (clear) {
            table.style.border = 'none';
            check.textContent = '';
            check.style.removeProperty('color');
        } else if (flag) {
            table.style.border = '2px solid green';
            check.style.color = 'green';
            check.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            check.style.color = 'red';
            check.textContent = 'NOP! You are not done yet...';
        }
    }
}
