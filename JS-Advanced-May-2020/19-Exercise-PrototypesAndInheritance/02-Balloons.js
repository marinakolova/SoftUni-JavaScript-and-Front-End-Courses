function solve() {
    class Balloon {
        constructor(baloonColor, gasWeight) {
            this.color = baloonColor;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(baloonColor, gasWeight, ribbonColor, ribbonLength) {
            super(baloonColor, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(baloonColor, gasWeight, ribbonColor, ribbonLength, text) {
            super(baloonColor, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
