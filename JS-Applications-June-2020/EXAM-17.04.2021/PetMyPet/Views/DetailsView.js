import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { isUserLogged } from '../src/helper.js';
import { pets } from '../requests/requests.js';
import page from '../node_modules/page/page.mjs';

const isOwner = (ownerId) => ownerId === sessionStorage.getItem('id');
const loggedIn = isUserLogged();

const deleteListing = async (id) => {
    try {
        await pets.deleteListing(id);
    } catch (e) {
        return alert(e.message);
    }

    page.redirect('/');
};

const DetailsView = ({ _id, _ownerId, name, description, imageUrl, type }) => {
    return html`
        <section id="details-page" class="details">
            <div class="pet-information">
                <h3>Name: ${name}</h3>
                <p class="type">Type: ${type}</p>
                <p class="img"><img src="${imageUrl}"></p>
                <div class="actions">
                    ${isOwner(_ownerId)
                        ? html`
                            <a class="button" href="/edit/${_id}">Edit</a>
                            <a class="button" href="javascript:void(0)" @click="${() => deleteListing(_id)}">Delete</a>`
                        : nothing}
            
                    ${!isOwner(_ownerId) && loggedIn === 'true'
                        ? html`
                            <a class="button" href="#">Like</a>`
                        : nothing}

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 6</span>
                    </div>           
                </div>
            </div>
            <div class="pet-description">
                <h3>Description:</h3>
                <p>${description}</p>
            </div>
        </section>`;
};

export { DetailsView }