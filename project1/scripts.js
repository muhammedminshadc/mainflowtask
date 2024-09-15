document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn')) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('mainContent').style.display = 'none';
    }

    // Switch to registration form
    document.getElementById('showRegister').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    });

    // Switch to login form
    document.getElementById('showLogin').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (username === registeredUsername && password === registeredPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('logout').style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    // Handle registration form submission
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        // Store user details in localStorage (for demo purposes)
        localStorage.setItem('registeredUsername', newUsername);
        localStorage.setItem('registeredPassword', newPassword);

        alert('Registration successful! Please log in.');
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Handle logout
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    });
});

// Function to show events when selected
function showEvents(eventId) {
    const events = document.querySelectorAll('.event');
    events.forEach(event => event.style.display = 'none');
    document.getElementById(eventId).style.display = 'block';
}
