const lib = require('./rgb-to-hex.js');
const expect = require('chai').expect;

describe('RGB to Hex tests', function () {
    it('should return undefined if the red value is of invalid type', function () {
        const result = rgbToHexColor('red', 0, 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the green value is of invalid type', function () {
        const result = rgbToHexColor(0, 'green', 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the blue value is of invalid type', function () {
        const result = rgbToHexColor(0, 0, 'blue'); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the red value is not in the expected range', function () {
        const result = rgbToHexColor(-1, 0, 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the green value is not in the expected range', function () {
        const result = rgbToHexColor(0, -1, 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the blue value is not in the expected range', function () {
        const result = rgbToHexColor(0, 0, -1); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the red value is not in the expected range', function () {
        const result = rgbToHexColor(300, 0, 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the green value is not in the expected range', function () {
        const result = rgbToHexColor(0, 300, 0); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return undefined if the blue value is not in the expected range', function () {
        const result = rgbToHexColor(0, 0, 300); // for judge without lib
        expect(result).to.equals(undefined);
    });

    it('should return correct value with valid input', function () {
        const result = rgbToHexColor(66, 135, 245); // for judge without lib
        expect(result).to.equals('#4287F5');
    });

    it('should return correct value with valid input', function () {
        const result = rgbToHexColor(255, 158, 170); // for judge without lib
        expect(result).to.equals('#FF9EAA');
    });

    it('should return correct value with more than 3 parameters', function () {
        const result = rgbToHexColor(0, 0, 0, 0); // for judge without lib
        expect(result).to.equals('#000000');
    });
});
