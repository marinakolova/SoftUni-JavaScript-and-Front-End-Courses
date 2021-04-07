const stringOperations = {
    stringSlicer: function (str) {
        return str.slice(0, 3) + '...';
    },
    wordChecker: function (word, text) {
        word = word.toLowerCase().trim();
        text = text.toLowerCase();

        if (text.includes(word)) {
            return word;
        } else {
            return `${word} not found!`;
        }
    },
    printEveryNthElement: function (n, arr) {
        n = Number(n);

        if (isNaN(n) || !Array.isArray(arr)) {
            throw new Error('The input is not valid!');
        }

        const outputArray = [];

        for (let i = 0; i < arr.length; i += n) {
            outputArray.push(arr[i]);
        }
        return outputArray;
    }
};

