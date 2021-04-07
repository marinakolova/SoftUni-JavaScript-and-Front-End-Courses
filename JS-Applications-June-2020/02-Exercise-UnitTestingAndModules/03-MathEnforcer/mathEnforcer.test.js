describe('Test mathEnforcer', function() {
    describe('test addFive', function() {
        it('should return undefined with a non-number parameter', function() {
            const result = mathEnforcer.addFive('test');
            expect(result).to.eq(undefined);
        });

        it('should return correct result with a number parameter', function() {
            const result = mathEnforcer.addFive(1);
            expect(result).to.eq(6);
        });

        it('should return correct result with a negative number parameter', function() {
            const result = mathEnforcer.addFive(-1);
            expect(result).to.eq(4);
        });

        it('should return correct result with a floating-point number parameter', function() {
            const result = mathEnforcer.addFive(0.1);
            expect(result).to.be.closeTo(5.1, 0.01);
        });
    });

    describe('test subtractTen', function() {
        it('should return undefined with a non-number parameter', function() {
            const result = mathEnforcer.subtractTen('test');
            expect(result).to.eq(undefined);
        });

        it('should return correct result with a number parameter', function() {
            const result = mathEnforcer.subtractTen(20);
            expect(result).to.eq(10);
        });

        it('should return correct result with a negative number parameter', function() {
            const result = mathEnforcer.subtractTen(-20);
            expect(result).to.eq(-30);
        });

        it('should return correct result with a floating-point number parameter', function() {
            const result = mathEnforcer.subtractTen(10.1);
            expect(result).to.be.closeTo(0.1, 0.01);
        });
    });

    describe('test sum', function() {
        it('should return undefined with a non-number parameter', function() {
            const result = mathEnforcer.sum('test', 1);
            expect(result).to.eq(undefined);
        });

        it('should return undefined with a non-number parameter', function() {
            const result = mathEnforcer.sum(1, 'test');
            expect(result).to.eq(undefined);
        });

        it('should return correct result with a number parameter', function() {
            const result = mathEnforcer.sum(1, 2);
            expect(result).to.eq(3);
        });

        it('should return correct result with a negative number parameter', function() {
            const result = mathEnforcer.sum(5, -4);
            expect(result).to.eq(1);
        });

        it('should return correct result with a floating-point number parameter', function() {
            const result = mathEnforcer.sum(1.1, 2.2);
            expect(result).to.be.closeTo(3.3, 0.01);
        });
    });
});
