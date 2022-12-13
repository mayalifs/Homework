// const SignUpForm = document.querySelector('#signUp');
const FullName = document.querySelector('#FName');
let UserName = document.querySelector('#uname');
let Password = document.querySelector('#psw');
let PasswordRepeat = document.querySelector('#pswRepeat');
let msg = document.querySelector('.msg');


//SignUp Validation
const SignUpForm = document.querySelector('#signup')
SignUpForm.addEventListener('click', (e) => {
    e.preventDefault();

    if (atLeastOneLetterAndSpace(FullName) === false) {
        msg.innerHTML = 'Please enter full name';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password.value.length < 8) {
        msg.innerHTML = 'Password must be at least 8 characters';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password.value.length > 15) {
        msg.innerHTML = 'Password must be less than 15 characters';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password !== '' && PasswordRepeat !== '' && Password !== PasswordRepeat) {
        msg.innerHTML = 'Please check that both passwords are the same';
        setTimeout(() => msg.remove(), 3000)
        return false;
    } else {
        // alert('You are now signed In');
        window.location.href = 'HomePage.html';
    }

})


//Check full name input validation
function atLeastOneLetterAndSpace(str) {
    return (
        /^[A-Za-z\s]*$/.test(str) &&
        /[A-Za-z]/.test(str) &&
        /\s/.test(str)
    );
}