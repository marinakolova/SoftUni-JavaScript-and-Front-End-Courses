import { fetches } from './backendAPI.js';

const user = {
	register: (body) => fetches.post('users/register', body),
	login: (body) => fetches.post('users/login', body),
	logout: () => fetches.get('users/logout'),
};

const pets = {
	getAllListings: () =>
		fetches.get('/data/pets?sortBy=_createdOn%20desc'),
	createListing: ({ name, description, imageUrl, type }) =>
		fetches.post('/data/pets', { name, description, imageUrl, type }),
	updateListing: (id, { name, description, imageUrl, type }) =>
		fetches.put(`/data/pets/${id}`, { name, description, imageUrl, type }),
	addLike: ({ petId }) =>
		fetches.post('/data/likes', { petId }),
	getCurrentListing: (id) =>
		fetches.get(`/data/pets/${id}`),
	deleteListing: (id) =>
		fetches.delete(`/data/pets/${id}`),
	getTotalLikes: (petId) =>
		fetches.get(`/data/likes?where=petId%3D%22${petId}%22&distinct=_ownerId&count`),
	getLikeFromUser: (petId, userId) =>
		fetches.get(`/data/likes?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`),
	getUserListings: (userId) =>
		fetches.get(`/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`),
};

export { user, pets }