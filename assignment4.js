function validateUserName(){
    var uName = document.getElementById("userName").value;
    var reu = /^[A-Za-z0-9]{4,8}$/;

    if (reu.test(uName)) {
        document.getElementById("userNamePrompt").style.color = "green";
        document.getElementById("userNamePrompt").innerHTML="<strong>&#10003;</strong>";
        return true;
       }
    else {
        document.getElementById("userNamePrompt").style.color = "Red";
        document.getElementById("userNamePrompt").innerHTML="<strong>&#10007; Enter 2&ndash;8 alphanumeric username.</strong>";
        return false;
    }
}
function validateFirstName(){
    var fName = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if (re1.test(fName)) {
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML="<strong>&#10003;</strong>";
        return true;
    }
    else {
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML="<strong>&#10007; Enter 2&ndash;25 characters.</strong>";
        return false;
    }
}
function validateLastName(){
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;

    if (re2.test(lName)) {
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML="<strong>&#10003;</strong>";
        return true;
    }
    else {
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML="<strong>&#10007; Enter 2&ndash;25 characters.</strong>";
        return false;
    }
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var rem = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (rem.test(email)) {
        document.getElementById("emailPrompt").style.color = "green";
        document.getElementById("emailPrompt").innerHTML="<strong>&#10003;</strong>";
        return true;
    }
    else {
        document.getElementById("emailPrompt").style.color = "Red";
        document.getElementById("emailPrompt").innerHTML="<strong>&#10007; Enter a valid email.</strong>";
        return false;
    }
}
function validateAge() {
    var age = document.getElementById("age").value;
    var rem = /^[0-9]{2,}$/;

    if ((rem.test(age)) && (age >= 10) && (age <= 100)) {
        document.getElementById("agePrompt").style.color = "green";
        document.getElementById("agePrompt").innerHTML="<strong>&#10003;</strong>";
        return true;
    }
    else {
        document.getElementById("agePrompt").style.color = "Red";
        document.getElementById("agePrompt").innerHTML="<strong>&#10007; Not valid age.</strong>";
        return false;
    }
}
function signUp() {
    var fName = document.getElementById("firstName").value;
    alert("Hello, "+fName+".\n\nThank you for signing up!");
}