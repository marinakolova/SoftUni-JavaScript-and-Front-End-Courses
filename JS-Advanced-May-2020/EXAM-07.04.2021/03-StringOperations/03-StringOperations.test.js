describe("Tests StringOperations", function () {
    describe("Test stringSlicer(str)", function () {
        it("should return correct str with input of more than 3 chars", function () {
            let result = stringOperations.stringSlicer('asdfg');
            expect(result).to.equal('asd...');
        });
        it("should return correct str with input of exactly 3 chars", function () {
            let result = stringOperations.stringSlicer('asd');
            expect(result).to.equal('asd...');
        });
        it("should return correct str with input of less than 3 chars", function () {
            let result = stringOperations.stringSlicer('as');
            expect(result).to.equal('as...');
        });
    });
    
    describe("Test wordChecker(word, text)", function () {
        it("should return correct answer if the word is existing in the text", function () {
            let result = stringOperations.wordChecker('test', 'Some test text');
            expect(result).to.equal('test');
        });
        it("should return correct answer if the word is not existing in the text", function () {
            let result = stringOperations.wordChecker('test', 'Some text');
            expect(result).to.equal('test not found!');
        });
        it("should return correct answer if the word has uppercases and is existing", function () {
            let result = stringOperations.wordChecker('tEst', 'Some test text');
            expect(result).to.equal('test');
        });
        it("should return correct answer if the word has spaces and is existing", function () {
            let result = stringOperations.wordChecker('test ', 'Some test text');
            expect(result).to.equal('test');
        });
        it("should return correct answer if the word has uppercases and spaces and is existing", function () {
            let result = stringOperations.wordChecker('tEst ', 'Some test text');
            expect(result).to.equal('test');
        });
        it("should return correct answer if the word has uppercases and is not existing", function () {
            let result = stringOperations.wordChecker('tEst', 'Some text');
            expect(result).to.equal('test not found!');
        });
        it("should return correct answer if the word has uppercases and is not existing uppercased", function () {
            let result = stringOperations.wordChecker('tEst', 'Some tEst text');
            expect(result).to.equal('test');
        });
        it("should return correct answer if the word has spaces and is not existing", function () {
            let result = stringOperations.wordChecker('test ', 'Some text');
            expect(result).to.equal('test not found!');
        });
        it("should return correct answer if the word has uppercases and spaces and is not existing", function () {
            let result = stringOperations.wordChecker('tEst ', 'Some text');
            expect(result).to.equal('test not found!');
        });
    });

    describe("Test printEveryNthElement(n, arr)", function () {
        it("shoudl throw an error if n is not a number", function () {
            assert.throw(function(){ stringOperations.printEveryNthElement('test', ['1', '2', '3', '4']) }, Error, 'The input is not valid!');
        });
        it("shoudl throw an error if arr is not an array", function () {
            assert.throw(function(){ stringOperations.printEveryNthElement(2, 'test') }, Error, 'The input is not valid!');
        });
        it("shoudl return correct result with valid data", function () {
            let result = stringOperations.printEveryNthElement(2, ['1', '2', '3', '4']);
            expect(result).to.have.members(['1','3']);
        });
        it("shoudl return correct result with valid data", function () {
            let result = stringOperations.printEveryNthElement(2, ['1', '2']);
            expect(result).to.have.members(['1']);
        });
    });
});
