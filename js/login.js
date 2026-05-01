// Login Page JavaScript
// Configuration
const DASHBOARD_PASSWORD = 'newmind2024'; // newmind + 2024

document.addEventListener('DOMContentLoaded', function() {
    initializeLogin();
    
    // Check if already authenticated - redirect to dashboard
    if (sessionStorage.getItem('dashboardAuth') === 'true') {
        window.location.href = 'dashboard.html';
    }
    
    // Focus password input on load
    document.getElementById('password').focus();
});

/**
 * Initialize login functionality
 */
function initializeLogin() {
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = 'HIDE';
            togglePassword.style.color = '#c7319c';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = 'SHOW';
            togglePassword.style.color = '#999';
        }
        passwordInput.focus();
    });

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');

        // Clear previous messages
        errorMessage.classList.remove('show');
        successMessage.classList.remove('show');

        // Verify password
        if (password === DASHBOARD_PASSWORD) {
            // Set authenticated session
            sessionStorage.setItem('dashboardAuth', 'true');
            
            successMessage.textContent = 'Access Granted - Redirecting...';
            successMessage.classList.add('show');

            // Redirect after short delay for user feedback
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 800);
        } else {
            errorMessage.textContent = 'Invalid password. Please try again.';
            errorMessage.classList.add('show');
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    });
}

console.log('Login page loaded successfully');