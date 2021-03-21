function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    return JSON.parse(input)
        .map(x => {
            return {
                area: Math.abs(area.call(x)),
                volume: Math.abs(vol.call(x))
            }
        });
}
