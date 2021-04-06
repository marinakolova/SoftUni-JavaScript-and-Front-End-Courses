describe('Test function', function() {
    it('should return undefined if input is not a string', function() {
        const arg = 1;
        const result = isOddOrEven(arg);
        expect(result).to.eq(undefined);
    });

    it('should return even if input string has even length', function() {
        const arg = 'aaaa';
        const result = isOddOrEven(arg);
        expect(result).to.eq('even');
    });

    it('should return odd if input string has odd length', function() {
        const arg = 'aaa';
        const result = isOddOrEven(arg);
        expect(result).to.eq('odd');
    });

    it('should return undefined if input is more than one string', function() {
        const arg = 'asd';
        const result = isOddOrEven(arg, arg);
        expect(result).to.eq(undefined);
    });
});
