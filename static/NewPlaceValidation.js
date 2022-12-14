const NewPlaceForm = document.querySelector('#add');
// const Name = document.querySelector('#rname').value;
// const StreetName = document.querySelector('#streetName').value;
// const StreetNumber = document.querySelector('#streetNumber').value;
// const City = document.querySelector('#city').value;
// const GoogleSite = document.querySelector('#site').value;
// const Phone = document.querySelector('#contactN').value;
// const msg = document.querySelector('.msg').value;


NewPlaceForm.addEventListener('click', (e) => {
    e.preventDefault();
    let RName = document.querySelector('#rname').value;
    let StreetName = document.querySelector('#streetName').value;
    let StreetNumber = document.querySelector('#streetNumber').value;
    // let City = document.querySelector('#city').value;
    let GoogleSite = document.querySelector('#site').value;
    let Phone = document.querySelector('#contactN').value;
    let msg = document.querySelector('.msg');

    // console.log(Name)
    // console.log(StreetName)
    // console.log(StreetNumber)
    // console.log(City)
    // console.log(GoogleSite)
    // console.log(Phone)

    // if (Name === '' || Name == null || Street === '' || Street == null || City === '' || City == null
    //     || GoogleSite === '' || GoogleSite == null || Phone === '' || Phone == null) {
    //     msg.innerHTML = 'Please enter all fields';
    //     return false;
    // }


    if (NameValidation(RName) == false ) {
        msg.innerHTML = "Invalid restaurant name, please type again in English only";
        RName.style.display = "none";
        // DisplayNone(RName);
        return false;
    }

    // if (RName.length < 3) {
    //     msg.innerHTML = "Restaurant name must be at least 3 characters";
    //     RName.style.display = "none";
    //     // DisplayNone(RName);
    //     return false;
    // }

    for (let i = 0; i < PlaceList.length; i++) {
        if (PlaceList[i].getName() === RName) {
            msg.innerHTML = 'Restaurant already exists';
            RName.style.display = "none";
            // DisplayNone(RName);
            return false;
        }
    }

    if (NameValidation(StreetName) == false) {
        msg.innerHTML = "Invalid street name, please type again in English only";
        StreetName.style.display = "none";
        // DisplayNone(StreetName);
        return false;
    }

    // if (StreetName.length < 3) {
    //     msg.innerHTML = "Street name must be at least 3 characters";
    //     StreetName.style.display = "none";
    //     // DisplayNone(StreetName);
    //     return false;
    // }

    if (StreetNumValidation(StreetNumber) == false) {
        msg.innerHTML = "Invalid street number, please type again in numbers only";
        StreetNumber.style.display = "none";
        // DisplayNone(StreetNumber);
        return false;
    }

    // if (StreetNumber.length > 3) {
    //     msg.innerHTML = "Street number must be maximum 3 numbers";
    //     StreetNumber.style.display = "none";
    //     // DisplayNone(StreetNumber);
    //     return false;
    // }

    if (UrlValidation(GoogleSite) == false) {
        msg.innerHTML = 'Please enter a valid URL';
        GoogleSite.style.display = "none";
        // DisplayNone(GoogleSite);
        return false;
    }

    if (PhoneValidation(Phone) == false) {
        msg.innerHTML = 'Please enter a valid phone number';
        Phone.style.display = "none";
        // DisplayNone(Phone);
        return false;
    }

})

// function DisplayNone (value){
//     value.style.display = "none";
// }


function NameValidation(name) {
    if (/^[a-z]+$/i.test(name)) //regex to check if valid name
    {
        return true;
    }
    return false;
}

function StreetNumValidation(number) {
    if (/^\d+$/.test(number)) //regex to check if valid street number
    // if(/^[0-9]+$/)
    {
        return true;
    }
    return false;
}

function UrlValidation(url) {
    if (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url)) //regex to check if valid url
    // if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    {
        return true;
    }
    return false;
}


function PhoneValidation(phone) {
    // if (/^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(phone)) //regex to check if valid phone
    if (/^05\d([-]{0,1})\d{7}$/.test(phone) || /^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(phone))
    {
        return true;
    }
    return false;
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
