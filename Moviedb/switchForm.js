function showLoginForm() {
    document.getElementById('LoginForm').style.display = 'flex'
    document.getElementById('RegisterForm').style.display = 'none'
}

function showRegisterForm() {
    document.getElementById('LoginForm').style.display = 'none'
    document.getElementById('RegisterForm').style.display = 'flex'
}