(() => {
    Promise.all([
        fetch('./monkey.hbs').then(res => res.text()),
        fetch('./monkeys-template.hbs').then(res => res.text())
    ]).then(([monkeyTemplateString, monkeysTemplateString]) => {
        Handlebars.registerPartial('monkey', monkeyTemplateString);
        const template = Handlebars.compile(monkeysTemplateString);
        document.querySelector('.monkeys').innerHTML = template({ monkeys });
    });
})();

function showDetails(id) {
    const element = document.getElementById(id);
    const btn = document.getElementById('showBtn' + id);

    if (element.style.display === 'none') {
        element.style.display = 'block'
        btn.innerText = 'Hide info';
    } else {
        element.style.display = 'none'
        btn.innerText = 'Info';
    }
}
