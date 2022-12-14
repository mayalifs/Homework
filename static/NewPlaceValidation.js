const NewPlaceForm = document.querySelector('#add').value;
// const Name = document.querySelector('#rname').value;
// const StreetName = document.querySelector('#streetName').value;
// const StreetNumber = document.querySelector('#streetNumber').value;
// const City = document.querySelector('#city').value;
// const GoogleSite = document.querySelector('#site').value;
// const Phone = document.querySelector('#contactN').value;
// const msg = document.querySelector('.msg').value;


NewPlaceForm.addEventListener('click', (e) => {
    e.preventDefault();

    let Name = document.querySelector('#rname').value;
    let StreetName = document.querySelector('#streetName').value;
    let StreetNumber = document.querySelector('#streetNumber').value;
    let City = document.querySelector('#city').value;
    let GoogleSite = document.querySelector('#site').value;
    let Phone = document.querySelector('#contactN').value;
    let msg = document.querySelector('.msg');

    console.log(Name)
    console.log(StreetName)
    console.log(StreetNumber)
    console.log(City)
    console.log(GoogleSite)
    console.log(Phone)

    // if (Name.value === '' || Name.value == null || Street.value === '' || Street.value == null || City.value === '' || City.value == null
    //     || GoogleSite.value === '' || GoogleSite.value == null || Phone.value === '' || Phone.value == null) {
    //     msg.innerHTML = 'Please enter all fields';
    //     setTimeout(() => msg.remove(), 3000)
    //     return false;
    // }
    for (let i = 0; i < PlaceList.length; i++) {
        if (PlaceList[i].getName() === Name) {
            msg.innerHTML = 'Restaurant already exists';
            Name.style.display = "none";
            // setTimeout(() => msg.remove(), 3000)
            return false;
        }
    }

    if (NameValidation(Name)) {
        msg.innerHTML = "Invalid restaurant name, please type again in English only";
        Name.style.display = "none";
        return false;
    }

    if (Name.length < 2) {
        msg.innerHTML = "Restaurant name must be at least 3 characters";
        Name.style.display = "none";
        return false;
    }

    if (NameValidation(StreetName)) {
        msg.innerHTML = "Invalid street name, please type again in English only";
        Name.style.display = "none";
        return false;
    }

    if (StreetName.length < 2) {
        msg.innerHTML = "Street name must be at least 3 characters";
        Name.style.display = "none";
        return false;
    }

    if (StreetNumValidation(StreetNumber)) {
        msg.innerHTML = "Invalid street number, please type again in numbers only";
        Name.style.display = "none";
        return false;
    }

    if (StreetNumber.length < 4) {
        msg.innerHTML = "Street name must be maximum 3 numbers";
        Name.style.display = "none";
        return false;
    }

    if (UrlValidation(GoogleSite)) {
        msg.innerHTML = 'Please enter a valid URL';
        GoogleSite.style.display = "none";
        // setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (PhoneValidation(Phone)) {
        msg.innerHTML = 'Please enter a valid phone number';
        Phone.style.display = "none";
        // setTimeout(() => msg.remove(), 3000)
        return false;
    }

})


function NameValidation(name) {
    if (/(?=.*\d)/g) //regex to check if valid name
    {
        return true;
    }
}

function StreetNumValidation(number) {
    if (/^\d+$/) //regex to check if valid street number
    {
        return true;
    }
}

function UrlValidation(url) {
    if (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/) //regex to check if valid url
    {
        return true;
    }
}


function PhoneValidation(phone) {
    if (/^0\d([\d]{0,1})([-]{0,1})\d{7}$/) //regex to check if valid phone
    {
        return true;
    }
}


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
