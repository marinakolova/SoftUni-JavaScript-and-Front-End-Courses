function host(endpoint) {
    return `https://judgetests.firebaseio.com/${endpoint}.json`;
}

const api = {
    locations: 'locations',
    today: 'forecast/today/',
    upcoming: 'forecast/upcoming/'
}

export async function getCode(name) {
    const data = await (await fetch(host(api.locations))).json();
    return data.find(l => l.name.toLowerCase() === name.toLowerCase()).code;
}

export async function getToday(code) {
    const data = await (await fetch(host(api.today + code))).json();
    return data;
}

export async function getUpcoming(code) {
    const data = await (await fetch(host(api.upcoming + code))).json();
    return data;
}
