// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const togglePasswordIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordIcon.textContent = "🙈"; // Change to hide eye icon
    } else {
        passwordField.type = "password";
        togglePasswordIcon.textContent = "👁"; // Change to show eye icon
    }
}

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to a server
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    // Basic validation
    if (name === "" || email === "" || password === "") {
        loginMessage.textContent = "All fields are required!";
    } else if (!validateEmail(email)) {
        loginMessage.textContent = "Please enter a valid email address!";
    } else if (password.length < 6) {
        loginMessage.textContent = "Password must be at least 6 characters long!";
    } else {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
        
        // You can perform a redirect or other action here after successful login
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}