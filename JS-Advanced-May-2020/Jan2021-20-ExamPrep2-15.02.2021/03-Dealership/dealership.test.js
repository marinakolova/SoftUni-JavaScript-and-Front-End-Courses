describe("Tests Dealership", function () {
    describe("Test newCarCost", function () {

        it("should return correct price for old car with discount", function () {
            let result = dealership.newCarCost('Audi A4 B8', 15001);
            expect(result).to.eq(1);
        });

        it("should return correct price for old car without discount", function () {
            let result = dealership.newCarCost('Audi S4', 15000);
            expect(result).to.eq(15000);
        });
    });

    describe("Test carEquipment", function () {

        it("should return correct selected extras", function () {
            let extrasArr = ['a', 'b'];
            let indexArr = [0, 1];
            let result = dealership.carEquipment(extrasArr, indexArr);
            expect(result).to.deep.equal(['a', 'b']);
        });
    });

    describe("Test euroCategory", function () {

        it("should return correct message for low euro category", function () {
            let result = dealership.euroCategory(2);
            expect(result).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it("should give correct discount for euro category", function () {
            let result = dealership.euroCategory(4);
            expect(result).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});
