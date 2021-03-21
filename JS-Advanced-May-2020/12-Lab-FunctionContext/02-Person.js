class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        return this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        return this._lastName = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const [first, last] = value.split(" ");

        if (first !== undefined && last !== undefined) {
            this.firstName = first;
            this.lastName = last;
        }

        return `${this.firstName} ${this.lastName}`;
    }
}
