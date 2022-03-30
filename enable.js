loginform.addEventListener('input', () => {
    if (email.value.length > 0 && password.value.length > 0 && checkbox.checked == true) {
            login.removeAttribute('disabled');
        } else {
            login.setAttribute('disabled', 'disabled');
        }
}) ;