function timeToWalk(steps = 0, footprint = 0, speed = 0) {
    let time = 0; //seconds
    let meters = steps * footprint; // distance
    time += Math.floor((steps * footprint) / 500) * 60; //breaks
    time += (meters / 1000 / speed) * 3600; //walking time
    let hours, minutes, seconds;

    Math.floor(time / 3600) < 10
        ? (hours = "0" + Math.floor(time / 3600))
        : (hours = Math.floor(time / 3600));
    Math.floor(time / 60) < 10
        ? (minutes = "0" + Math.floor(time / 60))
        : (minutes = Math.floor(time / 60));
    Math.ceil(time % 60) < 10
        ? (seconds = "0" + Math.ceil(time % 60))
        : (seconds = Math.ceil(time % 60));

    console.log(`${hours}:${minutes}:${seconds}`);
}