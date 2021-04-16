(function () {

    const templates = {};
    const loadingBoxEl = document.getElementById('loadingBox');
    const infoBoxEl = document.getElementById('infoBox');
    const errorBoxEl = document.getElementById('errorBox');

    function toggleLoader(showLoader) {
        if (showLoader) {
            loadingBoxEl.style.display = 'inline';
            return;
        }
        loadingBoxEl.style.display = 'none';
    }

    function getTemplate(templatePath) {
        const existingTemplate = templates[templatePath];
        if (existingTemplate) {
            return Promise.resolve(existingTemplate);
        }

        return fetch(`./templates/${templatePath}.hbs`).then(res => res.text()).then(templateString => {
            const template = Handlebars.compile(templateString);
            templates[templatePath] = template;
            return template;
        });
    }

    function renderTemplate(templatePath, templateContext, swapFn) {
        return getTemplate(templatePath).then(templateFn => {
            const content = templateFn(templateContext);
            swapFn(content);
        })
    }

    function registerPartialTemplate(templateName) {
        Promise.all([
            fetch('./templates/furniture-item.hbs').then(res => res.text()),
        ]).then(([furnitureItemTemplateString]) => {
            Handlebars.registerPartial(templateName, furnitureItemTemplateString);
        });
    }

    function loadFurniture(path) {
        return fetch(`./${path}.json`)
            .then(res => res.json())
            .then(data =>  {                
                return data;
            });
    }

    function loadFurnitureWithId(id) {
        return fetch('./furniture.json')
            .then(res => res.json())
            .then(data => {                
                // TODO: find by id
            });
    }

    function onCreateFurnitureLoaded() {
        const createBtnEl = document.getElementById('createBtn');

        createBtnEl.addEventListener('click', () => {
            console.log('TODO: Create New Furniture');
        });
    }

    const app = Sammy('#container .container', function () {
        this.before({}, function () {
            toggleLoader(true);
        });

        this.get('#/', function () {
            Promise.all([loadFurniture('furniture'), registerPartialTemplate('furniture')])
                .then(([furnitures]) => renderTemplate('home', { furnitures }, this.swap.bind(this)))
                .then(() => {
                    toggleLoader(false);
                });
        });

        this.get('#/create', function () {
            renderTemplate('create', {}, this.swap.bind(this)).then(() => {
                toggleLoader(false);
                onCreateFurnitureLoaded();
            });
        });

        this.get('#/profile', function () {
            Promise.all([loadFurniture('my-furniture'), registerPartialTemplate('furniture')])
                .then(([furnitures]) => renderTemplate('profile', { furnitures }, this.swap.bind(this)))
                .then(() => {
                    toggleLoader(false);
                });
        });

        this.get('#/details/:id', function (context) {
            const id = context.params.id;
            Promise.all([loadFurnitureWithId(id)])
                .then(([item]) => renderTemplate('details', { item }, this.swap.bind(this)))
                .then(() => {
                    toggleLoader(false);
                });
        });
    });

    app.run('#/');
}());