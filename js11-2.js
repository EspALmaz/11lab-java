const form = document.querySelector('.wrapper__form form');
const email = document.querySelector('.wrapper__form form input[type=email]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    console.log(email.value);
    if (validateEmail(emailValue)) {
        form.classList.remove('error');
    } else {
        form.classList.add('error');
    }
});
function validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var p1 = document.getElementById('password');
var p2 = document.getElementById('confirm_password')
function check(){
    if(p1==p2) 
        form.classList.remove('not');
    else 
        form.classList.add('not');
    }