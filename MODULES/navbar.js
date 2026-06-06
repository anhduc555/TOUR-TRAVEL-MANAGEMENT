const authBtn = document.querySelector('#auth-btn');
const navUser = JSON.parse(localStorage.getItem('currentUser'));

if (authBtn) {
    if (navUser) {
        authBtn.textContent = 'Logout';
        authBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        })
    }
    else {
        authBtn.textContent = 'Login';
        authBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        })
    }
}