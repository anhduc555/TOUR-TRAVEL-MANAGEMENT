function renderFeaturedTours(){
    const featuredTourList = document.querySelector('#featured-tour-list');
    let html = '';
    DB.tours.slice(0,3).forEach(t => {
        html += `
            <div class = 'tour-card'>
                <img src = "${t.image}" alt = "${t.tourName}">
                <h3>${t.tourName}</h3>
                <p><strong>Price: ${t.price.toLocaleString('en-US')} $</strong></p>
            </div>
        `
    });
    featuredTourList.innerHTML = html;
}

function renderReviews(){
    const reviewList = document.querySelector('#reviews-list');
    let html = '';
    DB.rates.forEach(r => {
        const ticket = getTicketById(r.ticketId);
        if (!ticket) return;
        const customer = getCustomerById(ticket.customerId);
        if(!customer) return;
        html += `
            <div class = "review-card">
                <p>★★★★★</p>
                <p>${r.comment}</p>
                <h4>${customer.customerName}</h4>
            </div>
        `
    });
    reviewList.innerHTML = html;
}