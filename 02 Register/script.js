document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please re-enter.');
            return;
        }
        alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}`);
       
    });
});
