const selectedTour = loadSelectedTour()
renderTripIn4(selectedTour);

const quaInput = document.querySelector('#quantity');
const nameInput = document.querySelector('#customer-name');
const phoneInput = document.querySelector('#customer-phone');
const confirmBtn = document.querySelector('#confirm-booking-btn');
const refuseBtn = document.querySelector('#close-booking-btn');

if(quaInput){
    quaInput.addEventListener('input', () => {
        const qua = parseInt(quaInput.value);
        if(!isNaN(qua) && qua > 0 && selectedTour){
            const total = calculateTotalPrice(selectedTour.price, qua);
            updateTotalPrice(total);
        }
        else{
            document.querySelector('#total-price').value  = '';
        }
    }); 
}
if(confirmBtn){
    confirmBtn.addEventListener('click', () =>{
        const name = nameInput ? nameInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const qua = quaInput ? quaInput.value : '0';

    if(!validateForm(name, phone, qua)){
        return;
    }
    const total = calculateTotalPrice(selectedTour.price, qua);
    const ticket = createTicket(selectedTour.id, name, phone, qua, total);
    saveBookingHistory(ticket);
    alert('Booking confirm! Your TicketId is: ' + ticket.id);
    clearSelectedTour();
    window.location.href = 'tour.html';
    });
}

if(refuseBtn){
    refuseBtn.addEventListener('click', () => {
        window.location.href ='tour.html';
    })
}
