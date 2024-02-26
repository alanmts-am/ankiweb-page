function checkForm(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var submit = document.getElementById('submit');

    if ((validEmail(email.value))){
        email.classList.remove('input-error');
        if (password.value.trim() != ''){
            submit.removeAttribute('disabled');
        }
    } else {
        email.classList.add('input-error');
        submit.setAttribute('disabled', 'true');
    }
}

function validEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function send(){
    var email = document.getElementById('email').value;
    window.alert('Usuário: ' + email + "\n" + "Login teste realizado com sucesso!");
}