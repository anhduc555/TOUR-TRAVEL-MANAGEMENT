function renderTripIn4(tour){
    if(!tour){
        document.querySelector('#trip-info').innerHTML = `<p>No tour selected. Please go back and choose a tour.</p>`;
        return;
    }
    const place = getPlaceByTourId(tour.id);
    document.querySelector('#trip-name').textContent = tour.tourName;
    document.querySelector('#trip-location').textContent = 'Location: ' + (place ? place.placeName : 'Unknown');
    document.querySelector('#trip-price').textContent = 'Price per person: ' + formatCurrency(tour.price);
    document.querySelector('#trip-start-date').textContent = 'Start Date: ' + tour.startDate;
    document.querySelector('#trip-end-date').textContent = 'End Date: ' + tour.endDate;
}
function updateTotalPrice(total){
    document.querySelector('#total-price').value = formatCurrency(total);
}