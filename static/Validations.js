//Validation

// const validSignInForm

//signin

const username=document.querySelector("uname");
const password=document.querySelector("psw");

function validSignInForm(){
    if (uname==null || umane=="")
    {
        alert("User name can't be blank");
        return false;
    }
    if(psw==null || psw==""){
        alert("Password can't be blank");
        return false;
    }
}

//signup

let fname=document.querySelector("fname");
let uname=document.querySelector("uname");
const email=document.querySelector("email");
let psw=document.querySelector("psw");
let pswrepeat=document.querySelector("pswrepeat");

function validSignInForm(){
    if (fname==null || fmane=="")
    {
        alert("Full name can't be blank");
        return false;
    }
    if (uname==null || umane=="")
    {
        alert("User name can't be blank");
        return false;
    }
    if(psw==null || psw==""){
        alert("Password can't be blank");
        return false;
    }
    if (uname==null || umane=="")
    {
        alert("User name can't be blank");
        return false;
    }
    if(psw==null || psw==""){
        alert("Password can't be blank");
        return false;
    }
}




// function validSignInForm(){
// let username=document.forms["SignInForm"]["uname"].value;
// let password=document.forms["SignInForm"]["psw"].value;
//
// if (username==null || username==" "){
//   alert("User name can't be blank")
//   return false;
// }
// if(password.length<8){
//   alert("Password must be at least 8 characters long.")
//   return false;
//   }
// return true;
// }



//signup

// function validSighUpForm() {

    let FName = document.forms["driver"]["fullname"].value;
    let email = document.forms["driver"]["email"].value;
    let phone = document.forms["driver"]["phone"].value;
    let destination = document.forms["driver"]["dest"].value;
    let seats = document.forms["driver"]["seats"].value;
    var errors = 0;
    var re = /\S+@\S+\.\S+/;
    let part1 = email.split("@");
//}


//add a new place

// function