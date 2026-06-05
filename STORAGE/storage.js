function saveSelectedTour(tour) {
    localStorage.setItem('selectedTour', JSON.stringify(tour));
}

function loadSelectedTour() {
    const data = localStorage.getItem('selectedTour');
    return data ? JSON.parse(data) : null;
}

function clearSelectedTour() {
    localStorage.removeItem('selectedTour');
}

function saveBookingHistory(ticket) {
    const his = loadBookingHistory();
    his.push(ticket);
    localStorage.setItem('bookingHistory', JSON.stringify(his));
}

function loadBookingHistory() {
    const data = localStorage.getItem('bookingHistory');
    return data ? JSON.parse(data) : [];
}

function clearBookingHistory() {
    localStorage.removeItem('bookingHistory');
}

function saveCustomerToStorage(customer) {
    const customers = loadCustomerFromStorage();
    const existed = customers.find(c => c.phone === customer.phone);
    if (!existed) {
        customers.push(customer);
        localStorage.setItem('savedCustomers', JSON.stringify(customers));
    }
}

function loadCustomerFromStorage() {
    const data = localStorage.getItem('savedCustomers');
    return data ? JSON.parse(data) : [];
}
function getLastTicketId() {
    const data = localStorage.getItem('lastTicketId');
    return data ? Number(data) : Math.max(...DB.tickets.map(t => t.id));
}

function saveLastTicketId(id) {
    localStorage.setItem('lastTicketId', id);
}
function getLastCustomerId() {
    const data = localStorage.getItem('lastCustomerId');
    return data ? Number(data) : Math.max(...DB.customers.map(c => c.id));
}
function saveLastCustomerId(id) {
    localStorage.setItem('lastCustomerId', id);
}