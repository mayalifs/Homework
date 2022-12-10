// const SignUpForm = document.querySelector('#signUp');
const FullName = document.querySelector('#FName');
const UserName = document.querySelector('#uname');
const Email = document.querySelector('#email');
const Password = document.querySelector('#psw');
const PasswordRepeat = document.querySelector('#pswRepeat');
const msg = document.querySelector('.msg');


//SignUp Validation
const SignUpForm = document.querySelector('#signup')
SignUpForm.addEventListener('click', (e) => {
    e.preventDefault();


    if (atLeastOneLetterAndSpace(FullName) === false) {
        msg.innerHTML = 'Please enter full name';
        setTimeout(() => msg.remove(), 2000)
        return false;
    }

    if (Password.value.length < 8) {
        msg.innerHTML = 'Password must be at least 8 characters';
        setTimeout(() => msg.remove(), 2000)
        return false;
    }

    if (Password.value.length > 15) {
        msg.innerHTML = 'Password must be less than 15 characters';
        setTimeout(() => msg.remove(), 2000)
        return false;
    }

    if (Password !== '' && PasswordRepeat !== '' && Password !== PasswordRepeat) {
        msg.innerHTML = 'Please check that both passwords are the same';
        setTimeout(() => msg.remove(), 2000)
        return false;
    } else {
        alert('You are now signed In');
        window.location.href = 'HomePage.html';
    }

})


//Check input validation

function atLeastOneLetterAndSpace(str) {
  return (
    /^[A-Za-z\s]*$/.test(str) &&
    /[A-Za-z]/.test(str) &&
    /\s/.test(str)
  );
}