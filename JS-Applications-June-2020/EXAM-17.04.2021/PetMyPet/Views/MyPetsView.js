import { html } from '../node_modules/lit-html/lit-html.js';

const ListingComponent = ({ _id, name, imageUrl, type }) => {
    return html`
        <li class="otherPet">
            <h3>Name: ${name}</h3>
            <p>Type: ${type}}</p>
            <p class="img"><img src="${imageUrl}"></p>
            <a class="button" href="/details/${_id}">Details</a>
        </li>`;
};

const MyPetsView = (listings) => {
    return html`
        <section id="my-pets-page" class="my-pets">
            <h1>My Pets</h1>
            ${listings.length > 0
                ? html`<ul class="my-pets-list">${listings.map(ListingComponent)}</ul>`
                : html`<p class="no-pets">No pets in database!</p>`}
        </section>`;
};

export { MyPetsView }