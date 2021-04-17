const appId = ''; // Backednless Application ID
const restApiKey = ''; // Backendless REST API key

function host(endpoint) {
    return `https://eu-api.backendless.com/${appId}/${restApiKey}/${endpoint}`;
}

const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    LOGOUT: 'users/logout',
    TEAMS: 'data/teams',
    UPDATE_USER: 'users/'
}

export async function register(username, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}

export async function login(username, password) {
    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "login": username,
            "password": password
        })
    })).json();
}

export async function logout() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw new Error('User is not logged in');
    }
    
    return fetch(host(endpoints.LOGOUT), {
        method: 'GET',
        headers: {
            'user-token': token
        }
    });
}

async function setUserTeamId(userId, teamId) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw new Error('User is not logged in');
    }

    return (await fetch(host(endpoints.UPDATE_USER + userId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamId
        })        
    })).json();
}

export async function createTeam(team) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw new Error('User is not logged in');
    }

    const result = await (await fetch(host(endpoints.TEAMS), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    })).json();

    if (result.hasOwnProperty('errorData')) {
        const err = new Error();
        Object.assign(err, result);
        throw err;
    }

    // Assign teamId to user
    const userUpdateResult = await setUserTeamId(result.ownerId, result.objectId);

    if (userUpdateResult.hasOwnProperty('errorData')) {
        const err = new Error();
        Object.assign(err, userUpdateResult);
        throw err;
    }

    return result;
}

export async function getTeamById(id) {
    return (await fetch(host(endpoints.TEAMS + '/' + id))).json();
}

export async function getTeams() {
    return (await fetch(host(endpoints.TEAMS))).json();
}