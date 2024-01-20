document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }
function validateForm() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const errorMessageElement = document.getElementById('error-message');

    if (!email.trim() || !password.trim()) {
        errorMessageElement.textContent = 'Please fill in all fields.';
        return false;
    }
    errorMessageElement.textContent = '';

    return true;
}