const lib = require('./checkForSymmetry.js');
const expect = require('chai').expect;

describe('Symmetry tests', function () {
    it('should return false if input is not an array', function () {
        const arg = 'test';
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(false);
    });

    it('should return true if an array with even num of items is symmetric', function () {
        const arg = ['1', '2', '3', '3', '2', '1'];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(true);
    });

    it('should return false if an array with even num of items is not symmetric', function () {
        const arg = ['1', '2', '3', '2', '3', '1'];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(false);
    });

    it('should return true if an array with odd num of items is symmetric', function () {
        const arg = ['1', '2', '3', '2', '1'];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(true);
    });    

    it('should return false if an array with odd num of items is not symmetric', function () {
        const arg = ['1', '2', '3', '1', '2'];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(false);
    });

    it('should return true if an array of numbers is symmetric', function () {
        const arg = [1, 2, 3, 3, 2, 1];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(true);
    });
    
    it('should return false if an array of diff types', function () {
        const arg = [1, '1'];
        const result = isSymmetric(arg); // for judge without lib
        expect(result).to.equal(false);
    });
});
