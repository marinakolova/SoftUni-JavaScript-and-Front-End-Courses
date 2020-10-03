class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = []
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.uniteRats.push(otherRat);
        }
    }

    getRats() {
        return this.uniteRats;
    }

    toString() {
        let result = `${this.name}\n`;

        for (const rat of this.uniteRats) {
            result += `##${rat.name}\n`;
        }

        return result.trim();
    }
}
