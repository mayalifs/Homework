// const places = ['Haifa, Israel', 'Tel Aviv, Israel', 'Modiin, Israel', 'New York, New York', 'Alpe Dhuez, France',
//     'Dolomites, France', 'Barcelona, Spain']

// console.log("hello");

//Constructor function
// function Places(name, googleSite, openHours, address, contact){
//     this.name = name;
//     this.address = new Address(address);
//     this.googleSite = googleSite;
//     this.openHours = new OpenH(openHours);
//     this.contact = contact;
// }

//Class Place
class Places{
    constructor(name, street, city, googleSite, openHours, contact){
        this.name = name;
        this.street = street;
        this.city = city;
        this.googleSite = googleSite;
        this.openHours = new OpenH(openHours);
        this.contact = contact;
    }

    // getCity(){
    //     return this.address.city;
    // }
    //
    // getName(){
    //     return this.name;
    // }


}

// Places.prototype.getCity = function (){
//         return this.address.city;
//     }

// function Address(street, number, city){
//     this.street = street;
//     this.number = number;
//     this.city = city;
// }

function OpenH (SunTillThur, friday, saturday){
    this.SunTillThur = `Sunday-Thursday: ${SunTillThur}`;
    this.friday = `Friday: ${friday}`;
    this.saturday = `Saturday: ${saturday}`;
}

const place1 = new Places('Anastasia','Frishman 54', 'Tel Aviv','https://www.anastasiatlv.co.il/',
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


class Rate{
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




//add a new place if closed

let closedCheckBox = document.querySelector('#closed')
console.log(closedCheckBox);
closedCheckBox.addEventListener('click', (e) =>
{
    let saturday = document.querySelectorAll('.saturday');
    if (closedCheckBox.checked===true) {
        removeTimeInput(saturday)
    }
    else
    {
        showTimeInput(saturday)
    }
})
const removeTimeInput = (className) => {
    for (let i = 0; i<className.length; i++)
    {
        className[i].style.display = "none";
    }

}
const showTimeInput = (className) => {
    for (let i = 0; i<className.length; i++)
    {
        className[i].style.display = "block";
    }

}



