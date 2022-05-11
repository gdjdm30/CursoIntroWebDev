//funtions for onblur validations
function validateFirstName(){
    var fName = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if (re1.test(fName)) {
        document.getElementById("feedBackFn").style.color = "green";
        document.getElementById("feedBackFn").innerHTML="&#10003;";
        return true;
    }
    else {
        document.getElementById("feedBackFn").style.color = "Red";
        document.getElementById("feedBackFn").innerHTML="&#10007; This field must be filled.";
        return false;
    }
}

function validateLastName(){
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-z\sA-Z\s\'\-]{2,15}$/;

    if (re2.test(lName)) {
        document.getElementById("feedBackLn").style.color = "green";
        document.getElementById("feedBackLn").innerHTML="&#10003;";
        return true;
    }
    else {
        document.getElementById("feedBackLn").style.color = "Red";
        document.getElementById("feedBackLn").innerHTML="&#10007; This field must be filled.";
        return false;
    }
}

function validateId(){
    var fName = document.getElementById("document").value;
    var re3 = /^[0-9]{8}$/;

    if (re3.test(fName)) {
        document.getElementById("feedBackId").style.color = "green";
        document.getElementById("feedBackId").innerHTML="&#10003;";
        return true;
    }
    else {
        document.getElementById("feedBackId").style.color = "Red";
        document.getElementById("feedBackId").innerHTML="&#10007; Enter a valid document.";
        return false;
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var re4 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re4.test(email)) {
        document.getElementById("feedBackE").style.color = "green";
        document.getElementById("feedBackE").innerHTML="&#10003;";
      return true;
    }
    else {
        document.getElementById("feedBackE").style.color = "Red";
        document.getElementById("feedBackE").innerHTML="&#10007; Enter a valid email.";
        return false;
    }
}

function validatePhone(){
    var fName = document.getElementById("phone").value;
    var re5 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (re5.test(fName)) {
        document.getElementById("feedBackP").style.color = "green";
        document.getElementById("feedBackP").innerHTML="&#10003;";
        return true;
    }
    else {
        document.getElementById("feedBackP").style.color = "Red";
        document.getElementById("feedBackP").innerHTML="&#10007; Enter a phone number.";
        return false;
    }
}
//function to validate inputs
function checkInput(){
    //variable as flag for empty inputs
    var nError = 0;
    //variable as flag count of fields checked
    var nCont = 0;
    //new variables to validate empty inputs with each one
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var id = document.getElementById("document").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (first.length == 0) {
        // set 1 if input is empty 
        nError = 1;
    }
    else {
        // set 0 if input is ok
        nError = 0;
        // add +1 to the count when field is checked
        nCont++;
    }

    if (last.length == 0) {
        nError = 1;
    }
    else {
        nError = 0;
        nCont++;
    }
    
    if (id.length == 0 ) {
        nError = 1;
    }
    else {
        nError = 0;
        nCont++;
    }
    
    if (mail.length == 0) {
        nError = 1;
    }
    else {
        nError = 0;
        nCont++;
    }
    
    if ( phone.length == 0 ) {
        nError = 1;
    }
    else {
        nError = 0;
        nCont++;
    }
    
    //final if, if flag is 1 (there is an empty input) or flag count is not equal 5 
    //(number of fields that must be checked) then reject otherwise validate
    if (nError == 1 || nCont != 5) {
        rejectRequest();
    }
    else {
        validateRequest();
    }
}
//function to final validate message to user all ok
function validateRequest() {
    alert("Your request have been placed.\nYou will be contacted by one of our assistants.");
    //call reload to clean the form after confirmed
    location.reload();

}
//function reject message to user that require to complete fields
function rejectRequest() {
    alert("Please complete the required fields *");
}