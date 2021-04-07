class Textbox {     
    constructor(selector, regex) {
        this._value = '';
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }    

    get value() {
        return this._value;
    }    

    set value(v) {
        this._value = v;

        for (let i = 0; i < this._elements.length; i++) {
            this._elements[i].value = v;            
        }

        // judge score: 40 / 100
        // Unexpected error: Textbox value did not change.
        // TODO: 100 / 100
    }    

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    } 
}

// let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
// let inputs = $('.textbox');

// inputs.on('input', function () { console.log(textbox.value); });
