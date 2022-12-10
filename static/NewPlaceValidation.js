const NewPlaceForm = document.querySelector('#add');
const Name = document.querySelector('#rname');
const Street = document.querySelector('#street');
const City = document.querySelector('#city');
const GoogleSite = document.querySelector('#site');
const msg = document.querySelector('.msg');


NewPlaceForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (Name.value === '' || Name.value == null || Street.value === '' || Street.value == null || City.value === '' || City.value == null
        || GoogleSite.value === '' || GoogleSite.value == null) {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000)
        return false;
    }

    if (PlaceList[i].getName() === UName.value) {
        msg.innerHTML = 'Restaurant already exists';
        setTimeout(() => msg.remove(), 2000)
        return false;

    } else {
        let place = 0;
        for (let i = 0; i < PlaceList.length; i++) {
            if (PlaceList[i].getUname() === UName.value && PlaceList[i].getPsw() === Psw.value) {
                alert('You are now signed In');
                window.location.href = 'HomePage.html';
                place = 1;
            }
            if (place === 0) {
                alert('User doest exists');
            }
        }
    }
})