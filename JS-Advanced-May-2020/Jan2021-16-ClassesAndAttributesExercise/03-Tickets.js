function solve(input, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const line of input) {
        const items = line.split("|");

        const destination = items[0];
        const price = Number(items[1]);
        const status = items[2];

        const ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    switch (criterion) {
        case "destination":
            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "status":
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        case "price":
            tickets = tickets.sort((a, b) => a.price - b.price);
            break;
        default:
            break;
    }

    return tickets;
}
