window.addEventListener('load', () => {
    const rootEl = document.getElementById('root');
    const input = document.getElementById('towns');

    document.getElementById('btnLoadTowns').addEventListener('click', () => {
        const towns = input.value.split(', ');

        Promise.all([
            fetch('./towns-template.hbs').then(res => res.text())
        ]).then(([townsTemplateString]) => {
            const template = Handlebars.compile(townsTemplateString);
            rootEl.innerHTML = template({ towns });
        });
    });
});
