import page from '../node_modules/page/page.mjs';
import { renderView } from './helper.js';
import { DashboardView } from '../Views/DashboardView.js';
import { LoginView } from '../Views/LoginView.js';
import { RegisterView } from '../Views/RegisterView.js';
import { contextAPI } from './contextAPI.js';
import { CreateView } from '../Views/CreateView.js';
import { DetailsView } from '../Views/DetailsView.js';
import { EditView } from '../Views/EditView.js';
import { MyPetsView } from '../Views/MyPetsView.js';

page('/', contextAPI.loadAllListings,
	(context) => renderView(DashboardView(context.allListings)));
page('/login', () => renderView(LoginView()));
page('/create', () => renderView(CreateView()));
page('/register', () => renderView(RegisterView()));

page('/details/:id', contextAPI.storeListing,
	(context) => renderView(DetailsView(context.currentListing)));
page('/edit/:id', contextAPI.storeListing,
	(context) => renderView(EditView(context.currentListing)));
page('/myPets', contextAPI.storeUserListings,
	(context) => renderView(MyPetsView(context.userListings)));

page.start();