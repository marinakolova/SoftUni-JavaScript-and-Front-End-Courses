function solve(face, suit) {
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
