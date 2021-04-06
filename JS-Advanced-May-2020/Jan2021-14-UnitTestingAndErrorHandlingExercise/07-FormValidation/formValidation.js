function validate() {
    const html = {
        companyCheck: document.getElementById('company'),
        submit: document.getElementById('submit'),
        validDiv: document.getElementById('valid'),
        companyInfo: document.getElementById('companyInfo'),
    };

    const inputFields = {
        username: document.getElementById('username'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        confirmPassword: document.getElementById('confirm-password'),
        companyNumber: document.getElementById('companyNumber'),
    };

    const checkLength = (value, min, e) => value.length >= min && value.length <= e;
    
    const checkPassword = (value, min, max, field) =>
        checkLength(value, min, max) && /^\w+$/g.test(value) && value === inputFields[field].value;

    const validator = {
        username: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
        password: (v) => checkPassword(v, 5, 15, 'confirmPassword'),
        confirmPassword: (v) => checkPassword(v, 5, 15, 'password'),
        email: (v) => /^.*@.*\..*$/g.test(v),
        companyNumber: (v, c) => c ? v >= 1000 && v <= 9999 : true,
    };

    const changeBorder = (isValid, element) => {
        const style = isValid ? 'border: none' : 'border-color: red';
        element.style = style;
    };

    html.companyCheck.addEventListener('change', (e) => {
        if (e.target.checked === true) {
            html.companyInfo.style.display = 'block';
        } else {
            html.companyInfo.style.display = 'none';
        }
    });

    html.submit.addEventListener('click', (e) => {
        e.preventDefault();
        const checked = html.companyCheck.checked;
        let oneInvalid = false;

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const isValid = validator[name](valueField.value, checked);
            changeBorder(isValid, inputFields[name]);
            if (!isValid) {
                oneInvalid = true;
            }
        })

        if (oneInvalid) {
            html.validDiv.style.display = 'none';
        } else {
            html.validDiv.style.display = 'block';
        }
    });
}
