
loginform.addEventListener('input', () => {
    
    if (/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@(email.com)$/.test(loginform.email.value) && password.value.length > 0 && checkbox.checked == true) {
            login.removeAttribute('disabled');
        } else {
            login.setAttribute('disabled', 'disabled');
        }
}) ;

