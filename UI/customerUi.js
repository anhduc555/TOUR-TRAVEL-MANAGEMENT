function renderGreeting(customerName){
        document.querySelector('#customer-greeting').textContent = 'Hello, ' + customerName + '!';      
}
function renderBookingHistory(tickets) {
    const historyList = document.querySelector('#history-list');
    if (tickets.length === 0) {
        renderNoResult();
        return;
    }
    const sorted = [...tickets].sort((a, b) => 
        new Date(b.bookingDate) - new Date(a.bookingDate)
    );
    const recent = sorted.slice(0, 4);
    let html = '';
    recent.forEach(ticket => {
        const tour = getTourByTicket(ticket);
        html += `
            <div class="history-card">
                <h3>${tour ? tour.tourName : 'Unknown Tour'}</h3>
                <p>Booking Date: ${ticket.bookingDate}</p>
                <p>Start Date: ${tour ? tour.startDate : 'N/A'}</p>
                <p>End Date: ${tour ? tour.endDate : 'N/A'}</p>
                <p class="total">Total: ${formatCurrency(ticket.totalPrice)}</p>
            </div>
        `;
    });
    historyList.innerHTML = html;
}
function renderNoResult() {
    document.querySelector('#history-list').innerHTML 
        = '<p class="no-result">Không tìm thấy lịch sử đặt tour.</p>';
}