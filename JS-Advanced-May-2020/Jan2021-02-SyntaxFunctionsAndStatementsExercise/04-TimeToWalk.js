function solve(steps, footprintLengthInMeters, speedInKmH) {
    let distanceInMeters = steps * footprintLengthInMeters;
    let speedInMetersSec = speedInKmH / 3.6;
    
    let breaks = Math.floor(distanceInMeters / 500);
    let timeInSeconds = (distanceInMeters / speedInMetersSec) + (breaks * 60);

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds - (minutes * 60));    

    console.log((hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds);
}
