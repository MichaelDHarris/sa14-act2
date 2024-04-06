const form = document.getElementById('registrationform');
const uninput = document.getElementById('username');
const emailinput = document.getElementById('email');
const pwinput = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    const username = uninput.value.trim();
    const email = emailinput.value.trim();
    const password = pwinput.value;
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (username.length < 6) {
        document.getElementById('usernameError').textContent = 'Username must have at least 6 characters';
        isValid = false;
    }
    if (!emailregex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email';
        isValid = false;
    }
    if (!passwordregex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must have 8 characters, a capital letter, and a number';
        isValid = false;
    }
    if (isValid) {
        alert('Registration successful!');
    }
}