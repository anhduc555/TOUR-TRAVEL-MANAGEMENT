function renderTours(tours) {
        const tourList = document.querySelector('#tour-list');
        let html = '';
        if (tours.length === 0) {
            html = '<p>No tours found.</p>';
        }
        tours.forEach(tour => {
            const place = getPlaceByTourId(tour.id);
            html += `<div class="tour-card">
                <img src="${tour.image}" alt="${tour.tourName}">
                <h3>${tour.tourName}</h3>
                <p><strong>Place:</strong> ${place ? place.placeName : 'Unknown place'}</p>
                <p><strong>Start Date:</strong> ${tour.startDate}</p>
                <p><strong>End Date:</strong> ${tour.endDate}</p>
                <p><strong>Price:</strong> ${tour.price.toLocaleString('en-US')} $</p>      
                <button class="book-btn" data-tour-id="${tour.id}"> Book Tour</button>
            </div>`;
        });
        tourList.innerHTML = html;
    }   
