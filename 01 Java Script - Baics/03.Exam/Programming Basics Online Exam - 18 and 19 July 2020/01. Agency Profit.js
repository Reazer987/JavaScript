function agency(input) {
    let avioName = input[0];
    let ticketParentsCount = Number.parseInt(input[1]);
    let childTicketsCount = Number.parseInt(input[2]);
    let parentsTicketsPrice = Number.parseFloat(input[3]);
    let price = Number.parseFloat(input[4]);
    let totalTicketChildPrice = parentsTicketsPrice - (parentsTicketsPrice * 0.70);
    let parentTicket = parentsTicketsPrice + price;
    let ticketWithTax = totalTicketChildPrice + price;
    let totaTicketPrice = (childTicketsCount * ticketWithTax) + (ticketParentsCount * parentTicket);
    let profit = totaTicketPrice * 0.20;
    console.log(`The profit of your agency from ${avioName} tickets is ${profit.toFixed(2)} lv.`);

}

agency();