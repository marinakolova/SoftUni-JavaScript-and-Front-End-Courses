const lib = require('./sumOfNums.js');
const expect = require('chai').expect;

describe('My lib tests', function () {
    it('should return Nan when the arg is a string', function () {
        const arg = 'test';
        const result = lib.sum(arg); // for judge without lib
        expect(result).to.be.NaN;
    });

    it('should return the sum of all items of a valid number string array', function () {
        const arg = ['1', '2', '3'];
        const result = lib.sum(arg); // for judge without lib
        expect(result).to.eq(6);
    });

    it('should return NaN if we have an invalid number string', function () {
        const arg = ['1', 'sdsad', '3'];
        const result = lib.sum(arg); // for judge without lib
        expect(result).to.be.NaN;
    });

    it('should return the sum of all items of a number array', function () {
        const arg = [1, 2, 3];
        const result = lib.sum(arg); // for judge without lib
        expect(result).to.eq(6);
    });
});
