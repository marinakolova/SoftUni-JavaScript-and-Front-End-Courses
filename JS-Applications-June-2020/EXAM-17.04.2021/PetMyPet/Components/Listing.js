import { html } from '../node_modules/lit-html/lit-html.js';

const ListingComponent = ({ _id, name, imageUrl, type }) => {
    return html`
        <li class="otherPet">
            <h3>Name: ${name}</h3>
            <p>Type: ${type}</p>
            <p class="img"><img src="${imageUrl}"></p>
            <a class="button" href="/details/${_id}">Details</a>
        </li>`;
};

export { ListingComponent }