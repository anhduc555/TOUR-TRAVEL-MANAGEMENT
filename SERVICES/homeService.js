function getTicketById(ticketID){
    return DB.tickets.find(ticket => { 
        return ticket.id === ticketID;
    });
}
function getCustomerById(customerId){
    return DB.customers.find(c => {
        return c.id === customerId;
    });
}