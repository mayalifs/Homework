
const SignInForm = document.querySelector('#signin');
const UName = document.querySelector('#uname');
const Psw = document.querySelector('#psw');
const msg = document.querySelector('.msg');


//SignIn Validation
// let SignInForm = document.querySelector('#signin');
SignInForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (UName.value === '' || UName.value == null || Psw.value === '' || Psw.value == null) {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000)
        return false;

    } else {
        let user = 0;
        for (let i = 0; i < UserList.length; i++) {
            if (UserList[i].getUname() === UName.value && UserList[i].getPsw() === Psw.value) {
                alert('You are now signed In');
                window.location.href = 'HomePage.html';
                user = 1;
            }
            if (user === 0) {
                alert('User doest exists');
            }
        }
        // //Sign in - add new option on nav bar when logged in
        //
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