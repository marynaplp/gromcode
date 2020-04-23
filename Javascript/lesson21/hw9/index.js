function finishForm() {
    const login = document.querySelector('input');
    login.setAttribute('name', login);
    const input = document.createElement('input');
    const setInput = document.querySelector('.login-form');
    setInput.append(input);
    input.setAttribute('type', 'password');
}