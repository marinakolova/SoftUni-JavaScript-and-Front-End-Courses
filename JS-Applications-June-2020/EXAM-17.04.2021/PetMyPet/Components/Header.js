import { html } from '../node_modules/lit-html/lit-html.js';
import { user } from '../requests/requests.js';
import { isUserLogged } from '../src/helper.js';
import page from '../node_modules/page/page.mjs';

const logout = async () => {
    try {
        await user.logout();
    } catch (e) {
        console.log(e);
    }

    sessionStorage.clear();
    page.redirect('/');
};

const getHeaderLinks = (loggedIn) => {
    const email = sessionStorage.getItem('email');

    return loggedIn
        ? html`
            <div id="user">
                <span>Welcome, ${email}</span>
                <a class="button" href="/myPets">My Pets</a>
                <a class="button" href="/create">Add Pet</a>
                <a class="button" href="javascript:void(0)" @click="${logout}">Logout</a>
            </div>`
        : html`
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>`;
};

const Header = () => html`
    <header id="site-header">
        <nav class="navbar">
            <section class="navbar-dashboard">
                <a href="/">Dashboard</a>
                ${getHeaderLinks(isUserLogged())}                    
            </section>
        </nav>
    </header>`;

export { Header }