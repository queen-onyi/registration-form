const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    alert("Registration successful!");
});