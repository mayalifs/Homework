//SignIn Validation
const SignInForm = document.querySelector('#signin');
SignInForm.addEventListener('click', (e) => {
    e.preventDefault();
    let UName = document.querySelector('#uname');
    let Psw = document.querySelector('#psw');
    let msg = document.querySelector('.msg');

    if (UName.value === '' || UName.value == null || Psw.value === '' || Psw.value == null) {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
        setTimeout(() => window.location.href = '../views/SignInPage.html', 1000)
        return false;
    } else {
        let user = 0;
        for (let i = 0; i < UserList.length; i++) {
            if (UserList[i].getUname() === UName.value && UserList[i].getPsw() === Psw.value) {
                // document.SignInForm.UName.focus()
                window.location.href = 'HomePage.html';
                user = 1;
            }
        }
        if (user === 0) {
            msg.innerHTML = 'User doest exists';
            setTimeout(() => msg.remove(), 3000)
            setTimeout(() => window.location.href = '../views/SignInPage.html', 1000)
            return false;
        }

    }

})

