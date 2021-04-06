function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = {
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            J: 'J',
            Q: 'Q',
            K: 'K',
            A: 'A'
        }

        const validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        class Card {
            constructor(f, s) {
                if (validFaces[f] && validSuits[s]) {
                    this._face = validFaces[f];
                    this._suit = validSuits[s];
                } else {
                    throw new Error;
                }
            }

            set face(value) {
                if (validFaces[value]) {
                    this._face = validFaces[value];
                } else {
                    throw new Error;
                }

            }

            set suit(value) {
                if (validSuits[value]) {
                    this._suit = validSuits[value];
                } else {
                    throw new Error;
                }
            }

            toString() {
                return `${this._face}${this._suit}`;
            }
        }

        return new Card(face, suit);
    }

    let result = [];

    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        try {
            if (element.length == 2) {
                result.push(createCard(element[0], element[1]));
            } else {
                result.push(createCard(element[0] + element[1], element[2]));
            }
        } catch (e) {
            console.log(`Invalid card: ${element}`);
            return;
        }
    }

    console.log(result.join(' '));
}
