function getCustomerByPhone(phone) {
    if (!phone) return null;
    return DB.customers.find(c => c.phone === phone);
}
function getTicketByCustomer(customer) {
    return DB.tickets.filter(t => t.customerId === customer.id);
}
function getTourByTicket(ticket) {
    return DB.tours.find(t => t.id === ticket.tourId);
}
function getBookingHistory(phone) {
    let cus = getCustomerByPhone(phone);
    if (!cus) {
        const savedCustomer = loadCustomerFromStorage();
        cus = savedCustomer.find(c => c.phone === phone);
    }
    if (!cus) return null;
    const ticketsFromDB = getTicketByCustomer(cus);
    const savedTickets = loadBookingHistory();
    const ticketsFromStorage = savedTickets.filter(t => t.customerId === cus.id);

    const allTickets = [...ticketsFromDB];
    ticketsFromStorage.forEach(t => {
        const existed = allTickets.find(ticket => ticket.id === t.id);
        if (!existed) allTickets.push(t);
    });
    return { cus, ticket: allTickets };
}