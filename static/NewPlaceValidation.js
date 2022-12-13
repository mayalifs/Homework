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

    if (isValidUrl(GoogleSite) === false) {
    // if (GoogleSite.value !== UrlPattern.value) {
        msg.innerHTML = 'Please enter a valid URL';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (phonenumber(Phone) === false) {
    // if (Phone.value !== ContactPattern.value) {
        msg.innerHTML = 'Please enter a valid phone number';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

})

// //URL validation


function isValidUrl(string) {
    var res = string.match('.*\.myco\..*');
    return (res !== null)
}


function phonenumber(string) {
    var res = string.match("[0-9]{3}-[0-9]{7} | [0-9]{2}-[0-9]{7}");
    return (res !== null)
}


// function isValidUrl(string) {
//     try {
//         new URL(string);
//         return true;
//     } catch (err) {
//         return false;
//     }
// }
//
// //Contact number validation
// function phonenumber(inputtxt) {
//     var phoneno = /^\d{10}$/;
//     if (inputtxt.value.match(phoneno)) {
//         return true;
//     } else {
//         alert("message");
//         return false;
//     }
// }