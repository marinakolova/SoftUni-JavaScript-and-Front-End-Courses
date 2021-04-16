(function () {
    const contactsDiv = document.getElementById('contacts');
    
    function init() {
        Promise.all([
            fetch('./contact-card.hbs').then(res => res.text()),
            fetch('./contacts.hbs').then(res => res.text()),
            fetch('./contacts.json').then(res => res.json())
        ]).then(([contactCardTemplateString, contactsTemplateString, contacts]) => {
            Handlebars.registerPartial('contact', contactCardTemplateString);
            const template = Handlebars.compile(contactsTemplateString);
            contactsDiv.innerHTML = template({ contacts });
        });
    }

    init();    
})();

function showDetails(id) {
    const element = document.getElementById(id);

    if (element.style.display === 'none') {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
}
