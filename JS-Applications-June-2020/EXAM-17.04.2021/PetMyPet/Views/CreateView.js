import { html } from '../node_modules/lit-html/lit-html.js';
import { createFormObject } from '../src/helper.js';
import { pets } from '../requests/requests.js';
import page from '../node_modules/page/page.mjs';

const createListing = async (e) => {
    e.preventDefault();
    const petObj = createFormObject(e.target);

    try {
        //validation
        Object.entries(petObj).forEach(([key, value]) => {
            if (value === '') {
                throw new Error('All fields are required');
            }
        })

        await pets.createListing(petObj);

        page.redirect('/');
    } catch (error) {
        return alert(error.message);
    }
};

const CreateView = () => {
    return html`
        <section id="create-page" class="create">
            <form id="create-form" @submit="${createListing}">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p class="field">
                        <label for="name">Name</label>
                        <span class="input">
                            <input type="text" name="name" id="name" placeholder="Name">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Pet">
                </fieldset>
            </form>
        </section>`;
};

export { CreateView }