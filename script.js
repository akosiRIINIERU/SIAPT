document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let isValid = true;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    } else if (username !== 'AdminERP') {
        document.getElementById('usernameError').textContent = 'Invalid username';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password !== 'AdminERP_2025') {
        document.getElementById('passwordError').textContent = 'Invalid password';
        isValid = false;
    }

    if (isValid) {
        // Redirect to program selection
        window.location.href = 'choice.html';
    }
});

document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Forgot your password? Please contact your IT Support.');
});
