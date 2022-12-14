//SignIn Validation
const SignInForm = document.querySelector('#signin');
SignInForm.addEventListener('click', (e) => {
    e.preventDefault();
    let UName = document.querySelector('#uname');
    let Psw = document.querySelector('#psw');
    let msg = document.querySelector('.msg');

    if (UName.value === '' || UName.value == null || Psw.value === '' || Psw.value == null) {
        msg.innerHTML = 'Please enter all fields';
        // UName.style.display = "none";
        // Psw.style.display = "none";
        // setTimeout(() => msg.remove(), 3000)
        return false;
    }

    else {
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
            // UName.style.display = "none";
            // setTimeout(() => msg.remove(), 3000)
            return false;
        }
        //Sign in - add new option on nav bar when logged in

        // const addMenuOption = document.querySelector('#signin')
        // addMenuOption.addEventListener('click', (e) => {
        //     let addToMenu = document.querySelectorAll('.addToMenu');
        //     if (user === 1) {
        //         showNewMenuOption(addToMenu)
        //     } else {
        //         removeNewMenuOption(addToMenu)
        //     }
        // })
        // const removeNewMenuOption = (className) => {
        //     for (let i = 0; i < className.length; i++) {
        //         className[i].style.display = "none";
        //
        //     }
        //
        // }
        // const showNewMenuOption = (className) => {
        //     for (let i = 0; i < className.length; i++) {
        //         className[i].style.display = "block";
        //     }
        //
        // }

    }

})

// function Reset(){
//       window.location.reload();
//     }
