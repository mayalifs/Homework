
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
addPlace.onsubmit = () => {
    name = document.getElementById("name").value
    street = document.getElementById("street").value;
    city = document.getElementById("city").value;
    googleSite = document.getElementById("googleSite").value
    contact = document.getElementById("contact").value

    newPlace = new Places(name, street, city, googleSite, contact)
    list.push(newPlace)
}


// Places.prototype.getCity = function (){
//         return this.address.city;
//     }

// function Address(street, number, city){
//     this.street = street;
//     this.number = number;
//     this.city = city;
// }

function OpenH(SunTillThur, friday, saturday) {
    this.SunTillThur = `Sunday-Thursday: ${SunTillThur}`;
    this.friday = `Friday: ${friday}`;
    this.saturday = `Saturday: ${saturday}`;
}

const place1 = new Places('Anastasia', 'Frishman 54', 'Tel Aviv', 'https://www.anastasiatlv.co.il/',
    new OpenH('8am-10pm', '8am-2pm', '9am-8pm'), '03-5290095');
const place2 = new Places('Meshek Barzilay', 'Ahad Haam 6', 'Tel Aviv', 'https://www.meshekbarzilay.co.il/',
    new OpenH('8am-10pm', '8am-2pm', 'Closed'),
    '03-5166329');
const place3 = new Places('Goodness', 'King George 41', 'Tel Aviv', 'https://www.goodness.co.il/',
    new OpenH('12am-10pm', '12am-4pm', '12pm-8pm'),
    '055-973-5792');

console.log(place1);
console.log(place2);
console.log(place3);

console.log(place1.address);


//Class User
class User {
    constructor(fname, uname, email, psw, pswrepeat) {
        this.fname = fname;
        this.uname = uname;
        this.email = email;
        this.psw = psw;
        this.pswrepeat = pswrepeat;
    }
}

const user1 = new User('Maya Lifshitz', 'mali', 'maya@gmail.com', '12345678!', '12345678!');
const user2 = new User('Dana Cohen', 'daco', 'dana@walla.com', '11223344?', '11223344?');
const user3 = new User('Noy Kalifa', 'noka', 'noy123@hotmail.com', '!?987654321', '!?987654321');

console.log(user1);
console.log(user2);
console.log(user3);


UserList = [];

var sinUpFormForm = document.querySelector("sinUpForm");
sinUpFormForm.onsubmit = function () {
    fname = document.getElementById('fname').value;
    uname = document.getElementById('uname').value;
    email = document.getElementById('city').value;
    psw = document.getElementById('psw').value;
    pswrepeat = document.getElementById('pswrepeat').value;

    newUser = new User(fname, uname, email, psw, pswrepeat);
    UserList.push(newUser);
}


//check if a user exists
let userExists = document.querySelector('#signupbtn')
userExists.addEventListener('click', (e) => {
    if (typeof userExists != "undefined") {
        return true;
    } else {
        return false;
    }
})

function containsUser(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}


// var navItems = document.querySelectorAll(".nav");
// for (var i = 0; i < navItems.length; i++) {
//    navItems[i].addEventListener("click", function() {
//       this.classList.add("active");
//    });
// }


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


//Nav li

// var d = new Date(); //gets the current date and time
//
// var currentPage = window.location; //file location and path name that contains the file name
//
// var currentPage = window.location.pathname; //gets the path name of the file
//
// const activePage = document.querySelectorAll('nav a').forEach(
//     link=>{
//         if(link.href.includes(`${currentPage}`)){
//             link.classList.add("active");
//         }
//     }
// );
//
// console.log(activePage);


//add a new place - if closed remove time option

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


//sign in - add new option on nav bar when logged in

let addMenuOption = document.querySelector('#signin')
addMenuOption.addEventListener('click', (e) => {
    let addToMenu = document.querySelectorAll('.addToMenu');
    if (addMenuOption.checked != null) {
        showNewMenuOption(addToMenu)
    } else {
        removeNewMenuOption(addToMenu)
    }
})
const removeNewMenuOption = (className) => {
    for (let i = 0; i < className.length; i++) {
        className[i].style.display = "none";

    }

}
const showNewMenuOption = (className) => {
    for (let i = 0; i < className.length; i++) {
        className[i].style.display = "block";
    }

}

// document.getElementById(signin).addEventListener('click', showNewMenuOption)
