const appState = {
    tours: [],
    filteredTours: [],
    selectedTour: null,
    booking: null,
    currentCustomers: null,
    filters: {
        keyword: '',
        place: 'All',
        price: 'All',
    }
};

function initApp() {
    appState.tours = [...DB.tours];
    appState.filteredTours = [...DB.tours];
    renderTours(appState.filteredTours);
    attachBookEvents();
}
function initHomepage() {
    renderFeaturedTours();
    renderReviews();
}