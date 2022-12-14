const NewPlaceForm = document.querySelector('#add');
const Name = document.querySelector('#rname');
const Street = document.querySelector('#street');
const City = document.querySelector('#city');
const GoogleSite = document.querySelector('#site');
const Phone = document.querySelector('#contactN');
const msg = document.querySelector('.msg');


NewPlaceForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (Name.value === '' || Name.value == null || Street.value === '' || Street.value == null || City.value === '' || City.value == null
        || GoogleSite.value === '' || GoogleSite.value == null || Phone.value === '' || Phone.value == null) {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }
    for (let i = 0; i < PlaceList.length; i++) {
        if (PlaceList[i].getName() === Name.value) {
            msg.innerHTML = 'Restaurant already exists';
            setTimeout(() => msg.remove(), 3000)
            return false;
        }
    }

    if (!GoogleSite.value) {
        msg.innerHTML = 'Please enter a valid URL';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (!Phone.value) {
        msg.innerHTML = 'Please enter a valid phone number';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

})





// Add a new place - if closed remove time option
const closedCheckBox = document.querySelector('#closed')

closedCheckBox.addEventListener('click', (e) => {
    let saturday = document.querySelectorAll('.saturday');
    if (closedCheckBox.checked === true) {
        removeTimeInput(saturday)
    } else {
        showTimeInput(saturday)
    }
})

const removeTimeInput = (className) => {
    for (let i = 0; i < className.length; i++) {
        className[i].style.display = "none";

    }
}
const showTimeInput = (className) => {
    for (let i = 0; i < className.length; i++) {
        className[i].style.display = "block";
    }
}
