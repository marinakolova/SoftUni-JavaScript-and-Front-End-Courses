import home from './controllers/home.js';
import about from './controllers/about.js';

import login, { loginPost } from './controllers/login.js';
import register, { registerPost } from './controllers/register.js';
import logout from './controllers/logout.js';

import catalog from './controllers/catalog.js';
import details from './controllers/details.js';
import create, { createPost } from './controllers/create.js';
import edit, { editPost } from './controllers/edit.js';


$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.userData = {            
            
        }

        this.get('index.html', home);
        this.get('/', home);
        this.get('#/home', home);
        this.get('#/about', about);

        this.get('#/login', login);
        this.post('#/login', (context) => {
            loginPost.call(context) // because Sammy.js has a problem with async functions
        });
        
        this.get('#/register', register);
        this.post('#/register', (context) => {
            registerPost.call(context) // because Sammy.js has a problem with async functions
        });
        
        this.get('#/logout', logout);

        this.get('#/catalog', catalog);
        this.get('#/catalog/:id', details);
        
        this.get('#/create', create);
        this.post('#/create', (context) => {
            createPost.call(context) // because Sammy.js has a problem with async functions
        });

        this.get('#/edit/:id', edit);
        this.post('#/edit/:id', (context) => {
            editPost.call(context) // because Sammy.js has a problem with async functions
        });

        this.get('#/join/:id', home); // TODO
        this.get('#/leave', home); // TODO        
    });

    app.run();
});