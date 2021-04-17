import { html } from '../node_modules/lit-html/lit-html.js';
import { createFormObject } from '../src/helper.js';
import { user } from '../requests/requests.js';
import { saveUserInStorage } from '../src/helper.js';
import page from '../node_modules/page/page.mjs';

const errors = {
    403: 'Invalid email and/or password',
    'Empty': 'All fields are required!',
};

const login = async (e) => {
    e.preventDefault();
    const formObject = createFormObject(e.target);
    console.log(formObject);

    try {
        if (formObject.email === '' || formObject.password === '') {
            throw new Error('Empty');
        }

        const response = await user.login({
            email: formObject.email,
            password: formObject.password,
        });

        saveUserInStorage(response);
        page.redirect('/');
    } catch (error) {
        return alert(errors[error.message]);
    }
};

const LoginView = () => {
    return html`
        <section id="login-page" class="login">
            <form id="login-form" @submit="${login}">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>`;
};

export { LoginView }