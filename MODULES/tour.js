const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const placeFilter = document.querySelector('#place-filter');
const priceFilter = document.querySelector('#price-filter');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        appState.filters.keyword = e.target.value;
        applyFilters();
    })
}
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        appState.filters.keyword = searchInput ? searchInput.value : '';
        applyFilters();
    })
}
if (placeFilter) {
    placeFilter.addEventListener('input', (e) => {
        appState.filters.place = e.target.value;
        applyFilters();
    })
}

if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
        appState.filters.price = e.target.value;
        applyFilters();
    })
}
function attachBookEvents() {
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tourId = Number(btn.dataset.tourId);
            const selectedTour = getTourById(tourId);
            appState.selectedTour = selectedTour;
            saveSelectedTour(selectedTour);
            window.location.href = 'booking.html';
        });
    });
};
function applyFilters() {
    const filtered = filterTours(appState.tours, appState.filters);
    appState.filteredTours = filtered;
    renderTours(filtered);
    attachBookEvents();
};