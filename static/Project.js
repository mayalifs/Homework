
var currentPage = window.location.pathname;
console.log(currentPage);

const activePage = document.querySelectorAll("nav a").forEach(
    link =>{
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add("active");
        }
    }
);
console.log(activePage);


//Class Place
class Places {
    constructor(name, street, city, googleSite, openHours, contact) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.googleSite = googleSite;
        this.openHours = new OpenH(openHours);
        this.contact = contact;
    }

}

PlaceList = [];

var addPlace = document.querySelector("addPlace");
addPlace.onsubmit = function() {
    let rname = document.getElementById("rname").value
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let googleSite = document.getElementById("googleSite").value
    let contact = document.getElementById("contact").value

    const newPlace = new Places(rname, street, city, googleSite, contact)
    PlaceList.push(newPlace)
}


// function OpenH(SunTillThur, friday, saturday)
function OpenH(openHst, closeHst, openHf, closeHf, openHs, closeHs){
    // this.SunTillThur = `Sunday-Thursday: ${SunTillThur}`;
    // this.friday = `Friday: ${friday}`;
    // this.saturday = `Saturday: ${saturday}`;

    this.SunTillThur = `Sunday-Thursday: ${openHst} + ${closeHst}`;
    this.friday = `Friday: ${openHf} + ${closeHf}`;
    this.saturday = `Saturday: ${openHs} + ${closeHs}`;
}

const place1 = new Places('Anastasia', 'Frishman 54', 'Tel Aviv', 'https://www.anastasiatlv.co.il/',
    new OpenH('8am-10pm', '8am-2pm', '9am-8pm'), '03-5290095');
const place2 = new Places('Meshek Barzilay', 'Ahad Haam 6', 'Tel Aviv', 'https://www.meshekbarzilay.co.il/',
    new OpenH('8am-10pm', '8am-2pm', 'Closed'),
    '03-5166329');
const place3 = new Places('Goodness', 'King George 41', 'Tel Aviv', 'https://www.goodness.co.il/',
    new OpenH('12am-10pm', '12am-4pm', '12pm-8pm'),
    '055-973-5792');

PlaceList.push(place1);
PlaceList.push(place2);
PlaceList.push(place3);




//Class User
class User {
    constructor(fname, uname, email, psw) {
        this.fname = fname;
        this.uname = uname;
        this.email = email;
        this.psw = psw;
    }
}


UserList = [];

var signUpForm = document.querySelector("sinUpForm");
signUpForm.onsubmit = function () {
    let fname = document.getElementById('fname').value;
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('city').value;
    let psw = document.getElementById('psw').value;

    const newUser = new User(fname, uname, email, psw);
    UserList.push(newUser);
}

const user1 = new User('Maya Lifshitz', 'mali', 'maya@gmail.com', '12345678!');
const user2 = new User('Dana Cohen', 'daco', 'dana@walla.com', '11223344?');
const user3 = new User('Noy Kalifa', 'noka', 'noy123@hotmail.com', '!?987654321');

UserList.push(user1);
UserList.push(user2);
UserList.push(user3);



//Class Rate
class Rate {
    constructor(pname, cleanliness, FQuality, SQuality, VForMoney, review) {
        this.pname = pname;
        this.cleanliness = cleanliness;
        this.FQuality = FQuality;
        this.pSQualitysw = SQuality;
        this.VForMoney = VForMoney;
        this.review = review;
    }
}

RateList = [];

var rateForm = document.querySelector("rate");
rateForm.onsubmit = function () {
    let Cleanliness = document.getElementById('cleanliness').value;
    let FoodQuality = document.getElementById('FQuality').value;
    let ServiceQuality = document.getElementById('SQuality').value;
    let ValueForMoney = document.getElementById('VForMoney').value;

    const newRate = new User(Cleanliness, FoodQuality, ServiceQuality, ValueForMoney);
    RateList.push(newRate);
}



//Add a new place - if closed remove time option

let closedCheckBox = document.querySelector('#closed')
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

//
// //Sign in - add new option on nav bar when logged in
//
// let addMenuOption = document.querySelector('#signin')
// addMenuOption.addEventListener('click', (e) => {
//     let addToMenu = document.querySelectorAll('.addToMenu');
//     if (addMenuOption.checked != null) {
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
//
// // document.getElementById(signin).addEventListener('click', showNewMenuOption)


//Validations


