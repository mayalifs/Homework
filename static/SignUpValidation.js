//SignUp Validation
const SignUpForm = document.querySelector('#signup');
SignUpForm.addEventListener('click', (e) => {
    e.preventDefault();
    let FirstName = document.querySelector('#fName').value;
    let LastName = document.querySelector('#lName').value;
    let UserName = document.querySelector('#uname').value;
    let Email = document.querySelector('#email').value;
    let Password = document.querySelector('#psw').value;
    let PasswordRepeat = document.querySelector('#pswRepeat').value;
    let msg = document.querySelector('.msg');
    console.log(FirstName)
    console.log(LastName)
    console.log(UserName)
    console.log(Email)
    console.log(Password)
    console.log(PasswordRepeat)


    if (NameValidation(FirstName) == false) {
        msg.innerHTML = "Invalid first name, please type again in English only";
        FirstName.style.display = "none";
        return false;
    }

    if (FirstName.length < 2) {
        msg.innerHTML = "First name must be at least 3 characters";
        FirstName.style.display = "none";
        return false;
    }

    if (NameValidation(LastName) == false) {
        msg.innerHTML = "Invalid last name, please type again in English only";
        LastName.style.display = "none";
        return false;
    }

    if (LastName.length < 2) {
        msg.innerHTML = "Last name must be at least 3 characters";
        LastName.style.display = "none";
        return false;
    }

    if (NameValidation(UserName) == false) {
        msg.innerHTML = "Invalid user name, please type again in English only";
        UserName.style.display = "none";
        return false;
    }

    if (UserName.length < 4) {
        msg.innerHTML = "User name must be at least 5 characters";
        UserName.style.display = "none";
        return false;
    }

    for (let i = 0; i < UserList.length; i++) {
        if (UserList[i].getUname() === UserName) {
            msg.innerHTML = "User name is already taken, please try a different one";
            UserName.style.display = "none";
            return false;
        }
    }

    if (EmailValidation(Email) == false) {
        msg.innerHTML = "Invalid email address";
        Email.style.display = "none";
        return false;
    }

    if (Password.length < 8) {
        msg.innerHTML = 'Password must be at least 8 characters';
        Password.style.display = "none";
        return false;
    }

    if (Password.length > 15) {
        msg.innerHTML = 'Password must be less than 15 characters';
        Password.style.display = "none";
        return false;
    }

    if (PasswordValidation(Password) == false) {
        msg.innerHTML = "Password must contain numbers, upper case, lower case, digits & English letters only";
        Password.style.display = "none";
        return false;
    }

    if (Password !== PasswordRepeat) {
        msg.innerHTML = 'Please check that both passwords are the same';
        Password.style.display = "none";
        PasswordRepeat.style.display = "none";
        return false;

    } else {
        window.location.href = 'HomePage.html';
    }

})


function EmailValidation(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) //regex to check if valid email
    {
        return true;
    }
    return false;
}

function NameValidation(name) {
    if (/(?=.*\d)/g) //regex to check if valid name
    {
        return true;
    }
    return false;
}

function PasswordValidation(password) {
    if ((/^[a-zA-Z]*$/) && (/^[a-zA-Z0-9]*$/) && (/^[a-zA-Z0-9]*$/)) //regex to check if valid password
    {
        return true;
    }
    return false;
}
