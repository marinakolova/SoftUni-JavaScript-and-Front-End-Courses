function solve() {
    const reducedPriceRatio = 0.85; // 15%
    const minYearForNewBook = 2000;

    // validate input (title is not empty and year and price are positive numbers
    const isBookValid = function (title, year, price) {
        return title.length > 0 && year > 0 && price > 0;
    };

    const buyBook = function (buyBookButton) {
        const bookPrice = parseFloat(buyBookButton.price);

        const priceElement = document.querySelectorAll('h1')[1];
        const priceElementTextElements = priceElement.innerText.split(':');

        let totalProfit = parseFloat(priceElementTextElements[1]);
        totalProfit += parseFloat(bookPrice);

        priceElement.innerText = priceElementTextElements[0] + `: ${totalProfit.toFixed(2)} BGN`;

        buyBookButton.parentElement.remove();
    };

    const moveToOldBooksSection = function (moveButton) {
        const bookDiv = moveButton.parentElement;

        moveButton.parentElement.remove();

        bookDiv.childNodes[2].remove();

        const price = parseFloat(bookDiv.childNodes[1].price);
        const reducedPrice = price * reducedPriceRatio;

        bookDiv.childNodes[1].price = reducedPrice.toFixed(2);
        bookDiv.childNodes[1].innerText = `Buy it only for ${reducedPrice.toFixed(2)} BGN`;

        document.querySelectorAll('div.shelf')[0].appendChild(bookDiv);
    };

    const addBook = function (title, year, price) {
        const newBookDiv = document.createElement('div');
        const titleParagraph = document.createElement('p');
        const buyButton = document.createElement('button');
        const moveToOldSectionButton = document.createElement('button');

        newBookDiv.className = 'book';
        titleParagraph.innerText = `${title} [${year}]`;
        if (year < minYearForNewBook) {
            price *= reducedPriceRatio;
        }

        let finalPrice = price.toFixed(2);
        buyButton.innerHTML = `Buy it only for ${finalPrice} BGN`;
        buyButton.price = finalPrice;
        moveToOldSectionButton.innerHTML = 'Move to old section';

        buyButton.addEventListener('click', function () {
            buyBook(this);
        });

        moveToOldSectionButton.addEventListener('click', function () {
            moveToOldBooksSection(this);
        });

        newBookDiv.appendChild(titleParagraph);
        newBookDiv.appendChild(buyButton);

        if (year < minYearForNewBook) {
            document.querySelectorAll('div.shelf')[0].appendChild(newBookDiv);
        } else {
            newBookDiv.appendChild(moveToOldSectionButton);
            document.querySelectorAll('div.shelf')[1].appendChild(newBookDiv);
        }
    };

    const form = document.querySelector('form');
    const addBookButton = document.querySelector('form button');

    addBookButton.addEventListener('click', function (event) {
        event.preventDefault();

        const inputs = form.getElementsByTagName('input');

        let title = inputs[0].value.trim();
        let year = parseInt(inputs[1].value);
        let price = parseFloat(inputs[2].value);

        if (isBookValid(title, year, price)) {
            addBook(title, year, price);
        }
    });
}
