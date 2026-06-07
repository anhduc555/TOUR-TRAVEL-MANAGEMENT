function saveUserToLocalStorage(user) {
    const newUser = loadUserFromStorage();
    const existed = newUser.find(u => u.username === user.username)
    if (!existed) {
        newUser.push(user);
        localStorage.setItem('users', JSON.stringify(newUser));
    }
}

function loadUserFromStorage() {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : [];
}
function validateEmail(email) {
    const validate = ['@gmail.com', '@yahoo.com', '@outlook.com'];
    return validate.some(domain => email.includes(domain))
}

function validatePhone(phone) {
    if (!isNaN(phone)) {
        if (phone.length === 10) {
            const prefix = phone.substring(0, 2);
            if (
                prefix === "03" ||
                prefix === "05" ||
                prefix === "07" ||
                prefix === "08" ||
                prefix === "09"
            ) {
                return true;
            }
        }
    }
    return false;
}