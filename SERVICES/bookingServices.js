function calculateTotalPrice(price, quantity) {
    return price * Number(quantity);
}

function validateForm(name, phone, quantity) {
    if (!name || name.trim() === '') {
        alert('Please enter your name!');
        return false;
    }
    if (!phone || phone.trim() === '') {
        alert('Please enter your phone!');
        return false;
    }
    if (!quantity || Number(quantity) < 1) {
        alert('Quantity must be at least 1!');
        return false;
    }
    return true;
}
function createTicket(tourId, name, phone, quatity, total) {
    let customer = DB.customers.find(c => c.phone === phone);
    if (!customer) {
        const savedCustomer = loadCustomerFromStorage();
        customer = savedCustomer.find(c => c.phone === phone);
    }
    if (!customer) {
        const newId = getLastCustomerId() + 1;
        saveLastCustomerId(newId);
        customer = {
            id: newId,
            customerName: name,
            phone: phone,
            country: 'Unknown'
        };
        DB.customers.push(customer);
    }
    saveCustomerToStorage(customer);
    const newTicketId = getLastTicketId() + 1;
    saveLastTicketId(newTicketId);
    const newTicket = {
        id: newTicketId,
        customerId: customer.id,
        tourId: tourId,
        bookingDate: formatDate(),
        totalPrice: total,
    };
    DB.tickets.push(newTicket);
    return newTicket;
}