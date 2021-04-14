const locations = [
    { "code": "ny", "name": "New York" },
    { "code": "london", "name": "London" },
    { "code": "barcelona", "name": "Barcelona" }
];

const today = {
    ny: {
        "forecast": { "condition": "Sunny", "high": "19", "low": "8" },
        "name": "New York, USA"
    },
    london: {
        "forecast": { "condition": "Rain", "high": "8", "low": "2" },
        "name": "London, UK"
    },
    barcelona: {
        "forecast": { "condition": "Sunny", "high": "19", "low": "11" },
        "name": "Barcelona, Spain"
    },
};

const upcoming = {
    ny: {
        "forecast": [
            { "condition": "Partly sunny", "high": "17", "low": "6" },
            { "condition": "Overcast", "high": "9", "low": "3" },
            { "condition": "Overcast", "high": "7", "low": "3" }
        ],
        "name": "New York"
    },
    london: {
        "forecast": [
            { "condition": "Rain", "high": "8", "low": "6" },
            { "condition": "Rain", "high": "11", "low": "3" },
            { "condition": "Rain", "high": "8", "low": "5" }
        ],
        "name": "London"
    },
    barcelona: {
        "forecast": [
            { "condition": "Partly sunny", "high": "15", "low": "10" },
            { "condition": "Overcast", "high": "17", "low": "12" },
            { "condition": "Rain", "high": "17", "low": "12" }
        ],
        "name": "Barcelona"
    },
};

export async function getCode(name) {
    return locations.find(l => l.name.toLowerCase() === name.toLowerCase()).code;
}

export async function getToday(code) {
    return today[code];
}

export async function getUpcoming(code) {
    return upcoming[code];
}
