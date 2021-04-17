import { html } from '../node_modules/lit-html/lit-html.js';
import { ListingComponent } from '../Components/Listing.js';


const DashboardView = (listings) => {
    return html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${listings.length > 0
                ? html`<ul class="other-pets-list">${listings.map(ListingComponent)}</ul>`
                : html`<p class="no-pets">No pets in database!</p>`}
        </section>`;
};

export { DashboardView }