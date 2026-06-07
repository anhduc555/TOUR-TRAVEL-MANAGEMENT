const goToRegisterBtn = document.querySelector('#go-to-register');
const goToLoginBtn = document.querySelector('#go-to-login');
const registerBtn = document.querySelector('#register-btn');
const registerError = document.querySelector('#register-error');
const registerUsername = document.querySelector('#register-username');
const registerEmail = document.querySelector('#register-email');
const registerPhone = document.querySelector('#register-phone')
const registerPassword = document.querySelector('#register-password');
const loginBtn = document.querySelector('#login-btn');
const loginError = document.querySelector('#login-error');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

if (goToRegisterBtn) {
    goToRegisterBtn.addEventListener('click', () => {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('register-box').style.display = 'block';
    })
}

if (goToLoginBtn) {
    goToLoginBtn.addEventListener('click', () => {
        document.getElementById('login-box').style.display = 'block';
        document.getElementById('register-box').style.display = 'none';
    })
}

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        const username = registerUsername.value.trim();
        const email = registerEmail.value.trim();
        const password = registerPassword.value.trim();
        const phone = registerPhone.value.trim();
        if (username === '' || email === '' || password === '' || (phone === '')) {
            registerError.textContent = "Please fill in all required fields";
            return;
        }
        if (!validateEmail(email)) {
            registerError.textContent = 'Invalid Email Format';
            return;
        }
        if (!validatePhone(phone)) {
            registerError.textContent = 'Invalid Phone Format';
            return;
        }
        const newUser = {
            username,
            email,
            password,
            phone
        };
        saveUserToLocalStorage(newUser);
        alert('Register successfull!');
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('login-box').style.display = 'block';
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();
        if (email === '' || password === '') {
            loginError.textContent = "Please fill in all required fields";
            return;
        }
        const users = loadUserFromStorage();
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            localStorage.setItem('currentUser', JSON.stringify(found));
            alert('login successful!');
            window.location.href = "home.html";
        }
        else {
            alert("Incorrect email or password, please try again!");
            return;
        }
    })
}
