function initApp() {
    appState.tours = [...DB.tours];  
    appState.filteredTours = [...DB.tours];
    renderTours(appState.filteredTours);
    attachBookEvents();
}
function initHomepage(){
    renderFeaturedTours();
    renderReviews();
}
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

const themeCheck = document.querySelector('#theme-toggle');
const body = document.body;
const curTheme = localStorage.getItem('theme');
// if(curTheme === 'dark'){
//     body.classList.add('dark-mode');
//     themeCheck.textContent = '☀️ Light Mode';
// }

// themeCheck.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if(body.classList.contains  ('dark-mode')){
//         themeCheck.textContent = '☀️ Light Mode';
//         localStorage.setItem('theme', 'dark');     
//     }
//     else 
//         {themeCheck.textContent = '🌙 Dark Mode';
//         localStorage.setItem('theme', 'light');}
// })