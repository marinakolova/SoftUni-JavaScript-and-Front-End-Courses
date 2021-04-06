const lib = require('./addSubtract.js');
const expect = require('chai').expect;

describe('Calculator tests', function () {
    it('should return an object', function () {
        const result = createCalculator(); // for judge without lib
        expect(typeof(result)).to.equals('object');
    });

    it('should return an object with method add', function () {
        const result = createCalculator(); // for judge without lib
        expect(result.add()).to.equals('yes');
    });

    it('should return an object with method subtract', function () {
        const result = createCalculator(); // for judge without lib
        expect(result.subtract()).to.equals('yes');
    });

    it('should return an object with method get', function () {
        const result = createCalculator(); // for judge without lib
        expect(result.get()).to.equals('yes');
    });

    it('should return undefined value', function () {
        const result = createCalculator(); // for judge without lib
        expect(result.value).to.equals(undefined);
    });

    it('should add correctly with num as string', function () {
        const result = createCalculator(); // for judge without lib
        result.add('1');
        expect(result.get()).to.equals(1);
    });

    it('should subtract correctly with num as string', function () {
        const result = createCalculator(); // for judge without lib
        result.add('2');
        result.subtract('1');
        expect(result.get()).to.equals(1);
    });
});
