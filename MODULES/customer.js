const phone = document.querySelector('#phone-input');
const searchCusBtn = document.querySelector('#search-customer-btn');

if (searchCusBtn) {
    searchCusBtn.addEventListener('click', () => {
        const p = phone ? phone.value : '';
        if (p === '') {
            alert('Please enter phone number used to book tour!');
            return;
        }
        const bookingHistory = getBookingHistory(p);
        if (!bookingHistory || !bookingHistory.cus) {
            renderNoResult();
        }
        else {
            renderGreeting(bookingHistory.cus.customerName);
            renderBookingHistory(bookingHistory.ticket);
        }
    })
}