describe('Test function', function() {
    it('should return undefined if first input is not a string', function() {
        const result = lookupChar(1, 1);
        expect(result).to.eq(undefined);
    });

    it('should return undefined if second input is not a number', function() {
        const result = lookupChar('test', 'test');
        expect(result).to.eq(undefined);
    });

    it('should return undefined if second input is not an integer', function() {
        const result = lookupChar('test', 1.5);
        expect(result).to.eq(undefined);
    });

    it('should return an empty string if index is a negative number', function() {
        const result = lookupChar('test', -1);
        expect(result).to.eq('Incorrect index');
    });

    it('should return an empty string if index is outside the bounds of the string', function() {
        const result = lookupChar('test', 5);
        expect(result).to.eq('Incorrect index');
    });

    it('should return correct value if input is correct', function() {
        const result = lookupChar('test', 2);
        expect(result).to.eq('s');
    });
});
