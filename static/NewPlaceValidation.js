
const NewPlaceForm = document.querySelector('#signin');
const Name = document.querySelector('#rname');
const Psw = document.querySelector('#psw');
const msg = document.querySelector('.msg');


NewPlaceForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (UName.value === '' || UName.value == null || Psw.value === '' || Psw.value == null) {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000)

    } else {
        let user = 0;
        for (let i = 0; i < UserList.length; i++) {
            if (PlaceList[i].getUname() === UName.value && PlaceList[i].getPsw() === Psw.value) {
                alert('You are now signed In');
                window.location.href = 'HomePage.html';
                user = 1;
            }
            if (user === 0) {
                alert('User doest exists');
            }
        }