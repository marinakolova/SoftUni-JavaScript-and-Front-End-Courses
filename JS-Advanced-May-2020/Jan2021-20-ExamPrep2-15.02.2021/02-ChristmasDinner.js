class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        return this._budget = value;
    }

    shopping(product) {
        let type = product[0];
        let price = Number(product[1]);

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }
    
    recipes(recipe) {
        for (let i = 0; i < recipe.productsList.length; i++) {
            if (!this.products.includes(recipe.productsList[i])) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }
    
    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish');            
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');            
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let strings = [];
        let names = Object.keys(this.guests);
        for (let i = 0; i < names.length; i++) {
            let name = names[i];
            let dish = this.guests[name];
            let products = this.dishes.find(x => x.recipeName === dish).productsList;

            strings.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`);
        }

        return strings.join('\n');
    }
}
