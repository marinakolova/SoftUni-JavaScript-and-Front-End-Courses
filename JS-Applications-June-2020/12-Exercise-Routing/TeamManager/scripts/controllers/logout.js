import { logout } from '../data.js';

export default async function () {
    await logout();

    this.app.userData.loggedIn = false;
    this.app.userData.username = '';
    this.app.userData.userId = '';
    this.app.userData.hasTeam = false;
    this.app.userData.teamId = undefined;

    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');

    this.redirect('#/home');
}