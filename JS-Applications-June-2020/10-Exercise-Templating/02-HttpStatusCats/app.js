(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        Promise.all([
            fetch('./cat.hbs').then(res => res.text()),
            fetch('./cats-template.hbs').then(res => res.text())
        ]).then(([catTemplateString, catsTemplateString]) => {
            Handlebars.registerPartial('cat', catTemplateString);
            const template = Handlebars.compile(catsTemplateString);
            document.getElementById('allCats').innerHTML = template({ cats });
        });
    }

})();

function showDetails(id) {
    const element = document.getElementById(id);
    const btn = document.getElementById('showBtn' + id);

    if (element.style.display === 'none') {
        element.style.display = 'block'
        btn.innerText = 'Hide status code';
    } else {
        element.style.display = 'none'
        btn.innerText = 'Show status code';
    }
}
