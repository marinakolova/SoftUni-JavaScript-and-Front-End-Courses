class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.rooms = {
            single: Math.round(0.5 * capacity),
            double: Math.round(0.3 * capacity),
            maisonette: Math.round(0.2 * capacity),
        };
        this._roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get roomsPricing() {
        return this._roomsPricing;
    }

    rentARoom(clientName, roomType, nights) {
        let rentNum = this.currentBookingNumber;
        
        let currBooking = {
            clientName: clientName,
            roomType: roomType,
            nights: nights,
            rentNumber: rentNum
        };

        if (this.rooms[roomType] > 0) {
            this.bookings.push(currBooking);
            this.currentBookingNumber += 1;
            this.capacity -= 1;
            this.rooms[roomType] -= 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${currBooking.rentNumber}.`;
        } else {
            let str = `No ${roomType} rooms available!`;

            let availableRooms = Object.keys(this.rooms);
            for (let i = 0; i < availableRooms.length; i++) {
                let room = availableRooms[i];
                let remainingCount = this.rooms[room];
                if (remainingCount > 0) {
                    str += ` Available ${room} rooms: ${remainingCount}.`;
                }
            }

            return str;
        }
    }

    checkOut(currentBookingNumber) {
        let found = this.bookings.find(x => x.rentNumber === currentBookingNumber);

        if (!found) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let totalMoney = found.nights * this.roomsPricing[found.roomType];
        this.capacity += 1;
        this.rooms[found.roomType] += 1;
        this.bookings.splice(this.bookings.indexOf(found), 1);

        return `We hope you enjoyed your time here, Mr./Mrs. ${found.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
    }

    report() {
        let str = `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;

        let bookingsStrings = [];
        for (let i = 0; i < this.bookings.length; i++) {
            const element = this.bookings[i];
            bookingsStrings.push(`bookingNumber - ${element.rentNumber}\nclientName - ${element.clientName}\nroomType - ${element.roomType}\nnights - ${element.nights}`);
        }

        if (bookingsStrings.length > 0) {
            str += bookingsStrings.join('\n----------\n');
        } else {
            str += 'There are currently no bookings.';
        }

        return str;
    }
}
