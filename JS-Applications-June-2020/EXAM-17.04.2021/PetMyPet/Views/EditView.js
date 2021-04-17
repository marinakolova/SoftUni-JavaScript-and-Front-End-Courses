import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { createFormObject } from '../src/helper.js';
import { pets } from '../requests/requests.js';
import page from '../node_modules/page/page.mjs';

const updateListing = async (id, e) => {
    e.preventDefault();
    const petObj = createFormObject(e.target);

    try {
        //validation
        Object.entries(petObj).forEach(([key, value]) => {
            if (value === '') {
                throw new Error('All fields are required');
            }
        })

        await pets.updateListing(id, petObj);
        await pets.updateListing(id, petObj);

        page.redirect(`/details/{id}`);
    } catch (error) {
        return alert(error.message);
    }
};

const EditView = ({ _id, name, description, imageUrl, type }) => {
    return html`
        <section id="edit-page" class="edit">
            <form id="edit-form" @submit="${(e) => updateListing(_id, e)}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p class="field">
                        <label for="name">Name</label>
                        <span class="input">
                            <input type="text" name="name" id="name" value="${name}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description">${description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="${imageUrl}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="${type}">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>`;
};

export { EditView }