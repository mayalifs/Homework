//Active nav bar
var currentPage = window.location.pathname;
console.log(currentPage);

const activePage = document.querySelectorAll("nav a").forEach(
    link => {
        if (link.href.includes(`${currentPage}`)) {
            link.classList.add("active");
        }
    }
);
console.log(activePage);


//Show password

function showPassword() {
  var x = document.getElementById('psw');
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

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

    getName() {
        return this.name;
    }

    getCity() {
        return this.city;
    }

}

const PlaceList = [];

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

console.log(PlaceList);

//
// let addPlace = document.querySelector("addPlace");
// addPlace.onsubmit = function () {
//     let rname = document.getElementById("rname").value
//     let street = document.getElementById("street").value;
//     let city = document.getElementById("city").value;
//     let googleSite = document.getElementById("googleSite").value
//     let contact = document.getElementById("contact").value
//
//     const newPlace = new Places(rname, street, city, googleSite, contact)
//     PlaceList.push(newPlace)
// }


// function OpenH(SunTillThur, friday, saturday)
function OpenH(openHst, closeHst, openHf, closeHf, openHs, closeHs) {
    // this.SunTillThur = `Sunday-Thursday: ${SunTillThur}`;
    // this.friday = `Friday: ${friday}`;
    // this.saturday = `Saturday: ${saturday}`;

    this.SunTillThur = `Sunday-Thursday: ${openHst} + ${closeHst}`;
    this.friday = `Friday: ${openHf} + ${closeHf}`;
    this.saturday = `Saturday: ${openHs} + ${closeHs}`;
}


//Class User
class User {
    constructor(fname, uname, email, psw) {
        this.fname = fname;
        this.uname = uname;
        this.email = email;
        this.psw = psw;
    }

    getUname() {
        return this.uname;
    }

    getPsw() {
        return this.psw;
    }

}


const UserList = [];

const user1 = new User('Maya Lifshitz', 'mali', 'maya@gmail.com', '12345678!');
const user2 = new User('Dana Cohen', 'daco', 'dana@walla.com', '11223344?');
const user3 = new User('Noy Kalifa', 'noka', 'noy123@hotmail.com', '!?987654321');

UserList.push(user1)
UserList.push(user2)
UserList.push(user3)

console.log(UserList);



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

const RateList = [];

const rate1 = new Rate('Anastasia', '5', '5', '4', '5', 'Had the best time!');
const rate2 = new Rate('Meshek Brzilay', '5', '5', '4', '5', 'What an amazing place had the best time!');
const rate3 = new Rate('Goddness', '5', '5', '4', '5', 'Cant wait to eat there again!!');

RateList.push(rate1)
RateList.push(rate2)
RateList.push(rate3)

console.log(RateList);




// document.getElementById(signin).addEventListener('click', showNewMenuOption)


//GeoLocation

function GetLocation() {
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
        console.log("in get location");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("p").innerHTML = "Geo;location is not supported";
    }
};

function showPosition(position) {
    var x = document.getElementById('p');
    var y = document.getElementById("BTN");
    x.innerHTML = "Latitude: " + position.coords.latitude
    + "longtitide: " + position.coords. longitude;
}


//Greeting according to the time

// function MyGreeting() {
//     console.log("im in my greeting");
//     var d = new Date;
//     var t = d.getUTCHours();
//     if (t < 12) {
//         document.getElementById("demo").innerHTML = "Good Morning";
//     } else if (t < 18) {
//         document.getElementById("demo").innerHTML = "Good Afternoon";
//     } else {
//         document.getElementById("demo").innerHTML = "Good Evening"
//     }
// }


//Validations



//Add a new place validation
//
// function addPlaceFormValidation() {
//     let placeName = document.forms["addPlaceForm"]["rnam"].value;
//     let street = document.forms["addPlaceForm"]["street"].value;
//     let city = document.forms["addPlaceForm"]["city"].value;
//     let site = document.forms["addPlaceForm"]["site"].value;
//     let currentTime = new Date();
//
//
//     if (!placeName.match(/^[a-zA-Z]*$/)) {
//         alert("Invalid Place name, please type again in English only")
//         return false;
//     }
//     if (!userName.match(/^[a-zA-Z]*$/) && !userName.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !userName.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)) {
//         alert("Invalid last name, please type again in English only")
//         return false;
//     }
//     if (placeName.length < 2) {
//         alert("The name is too short")
//         return false;
//     }
//     if (placeName.length > 15) {
//         alert("The name is too long")
//         return false;
//     }
//     if (userName.length < 2) {
//         alert("Last name too short")
//         return false;
//     }
//     if (email == "") {
//         alert("Email is not valid")
//         return false;
//     }
//     if (password.length < 8) {
//         alert("Please enter password with minimum 8 chars ")
//         return false;
//     }
//     if (password != '' && pswrepeat != '' && password != pswrepeat) {
//         alert("Please ensure that you type your password correct in 2 places.")
//         return false;
//     }
// }











//Add a new place - if closed remove time option

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


//Filter places by location
const filterPlaces = PlaceList.filter(place => {
    return place.getCity();
})

console.log(filterPlaces);



//Show and hide nav bar options

