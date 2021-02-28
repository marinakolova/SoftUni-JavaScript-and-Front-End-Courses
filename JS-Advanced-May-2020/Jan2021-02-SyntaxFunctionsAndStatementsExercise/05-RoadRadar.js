function roadRadat(speed, area) {
    let limit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };

    let speedDiff = speed - limit[area];
    
    if (speedDiff <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
    }
    else {
        let status = speedDiff <= 20 ? 'speeding'
            : speedDiff <= 40 ? 'excessive speeding'
            : 'reckless driving';

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit[area]} - ${status}`);
    }
}
