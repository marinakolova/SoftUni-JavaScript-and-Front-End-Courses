describe("Tests Pizza Place", function () { // judge score: 85 / 100
    describe("Test makeAnOrder", function () {

        it("should throw an error if no pizza is ordered", function () {
            expect(pizzUni.makeAnOrder({orderedDrink: 'drink'})).to.throw();
        });

        it("should return correct result with only pizza ordered", function () {
            let result = pizzUni.makeAnOrder({orderedPizza: 'pizza'});
            expect(result).to.equal('You just ordered pizza');
        });

        it("should return correct result with pizza and drink ordered", function () {
            let result = pizzUni.makeAnOrder({orderedPizza: 'pizza', orderedDrink: 'drink'});
            expect(result).to.equal('You just ordered pizza and drink.');
        });
    });

    describe("Test getRemainingWork", function () {

        it("should return correct 1 remaining work", function () {
            let result = pizzUni.getRemainingWork([{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'preparing' }]);
            expect(result).to.equal('The following pizzas are still preparing: pizza2.');
        });

        it("should return correct more remaining work", function () {
            let result = pizzUni.getRemainingWork([{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'preparing' }, { pizzaName: 'pizza3', status: 'preparing' }]);
            expect(result).to.equal('The following pizzas are still preparing: pizza2, pizza3.');
        });

        it("should return correct message if all orders are complete", function () {
            let result = pizzUni.getRemainingWork([{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'ready' }]);
            expect(result).to.equal('All orders are complete!');
        });
    });

    describe("Test orderType", function () {

        it("should return correct value for carry out", function () {
            let result = pizzUni.orderType(100, 'Carry Out');
            expect(result).to.eq(90);
        });

        it("should return correct value for delivery", function () {
            let result = pizzUni.orderType(5, 'Delivery');
            expect(result).to.eq(5);
        });
    });
});
