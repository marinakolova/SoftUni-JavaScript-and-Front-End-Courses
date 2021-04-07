class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity == 0) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel: carModel, carNumber: carNumber, payed: false });
        this.capacity -= 1;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let foundCar = this.vehicles.find(x => x.carNumber === carNumber);

        if (!foundCar) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!foundCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(this.vehicles.indexOf(foundCar), 1);
        this.capacity += 1;
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let foundCar = this.vehicles.find(x => x.carNumber === carNumber);

        if (!foundCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (foundCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        foundCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let str = `The Parking Lot has ${this.capacity} empty spots left.`;
            let sorted = this.vehicles.sort((a, b) => a.carNumber.localeCompare(b.carNumber));
            sorted.forEach(element => {
                let hasPayed = element.payed ? 'Has payed' : 'Not payed';
                str += `\n${element.carModel} == ${element.carNumber} - ${hasPayed}`;
            });
            return str;
        } else {
            let foundCar = this.vehicles.find(x => x.carNumber === carNumber);
            let hasPayed = foundCar.payed ? 'Has payed' : 'Not payed';
            return `${foundCar.carModel} == ${carNumber} - ${hasPayed}`;
        }
    }
}
