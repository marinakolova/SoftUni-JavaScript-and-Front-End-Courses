import { pets, user } from '../requests/requests.js';

const contextAPI = {
	loadAllListings: async (context, next) => {
		context.allListings = await pets.getAllListings();
		next();
	},
	storeListing: async (context, next) => {
		context.currentListing = await pets.getCurrentListing(context.params.id);
		next();
	},
	storeUserListings: async (context, next) => {
		const userId = sessionStorage.getItem('id');
		context.userListings = await pets.getUserListings(userId);
		next();
	},
};

export { contextAPI }