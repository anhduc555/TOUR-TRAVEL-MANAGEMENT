
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    const p = currentUser.phone;
    const bookingHistory = getBookingHistory(p);
    if (!bookingHistory || !bookingHistory.cus) {
        renderNoResult();
    }
    else {
        renderGreeting(bookingHistory.cus.customerName);
        renderBookingHistory(bookingHistory.ticket);
    }
}
else {
    window.location.href = 'login.html';
}