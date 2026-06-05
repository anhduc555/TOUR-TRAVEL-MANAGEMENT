function getPlaceByTourId(tourId) {

    const tourPlace = DB.tour_places.find(tp => {
        return tp.tourId === tourId;
    });

    if (!tourPlace) {
        return null;
    }

    const place = DB.places.find(p => {
        return p.id === tourPlace.placeId;
    });

    return place;
}
function filterTours(tours, filters) {
    let filtered = tours;
    if (filters.keyword != '') {
        filtered = filtered.filter(tour => {
            return tour.tourName.toLowerCase().includes(filters.keyword.toLowerCase());
        });
    }

    if (filters.place != 'All') {
        filtered = filtered.filter(tour => {
            const place = getPlaceByTourId(tour.id);
            if (!place) return false;
            return place.placeName.toLocaleLowerCase().includes(filters.place.toLowerCase());
        });
    };

    if (filters.price != 'All') {
        if (filters.price === 'High') {
            filtered = filtered.filter(tour => {
                return tour.price > 320;
            })
        }
        else if (filters.price === 'Medium') {
            filtered = filtered.filter(tour => {
                return tour.price > 200 && tour.price <= 320;
            })
        }
        else if (filters.price === 'Low') {
            filtered = filtered.filter(tour => {
                return tour.price <= 200;
            })
        };
    };
    return filtered;
}
function getTourById(tourId) {
    return DB.tours.find(tour => {
        return tour.id === tourId;
    });
}