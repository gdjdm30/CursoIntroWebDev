function validateFirstName(){
    var fName = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if (re1.test(fName)) {
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else {
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2&ndash;15 characters.</strong>";
        return false;
    }
}
function validateLastName(){
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-']{2,25}$/;

    if (re2.test(lName)) {
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>";
        return true;
    }
    else {
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2&ndash;25 characters.</strong>";
        return false;
    }
}
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var re3 = /^\d{2}-\d{4}-\d{4}$/;

    if (re3.test(phone)) {
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else {
        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML="<strong>Enter a valid phone number.</strong>";
        return (false);
    }
}
function calcOrder() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>Order Resume:</h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName + "</br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML += "<p>Total: $" + price * quantity + "</p>";
}
function displayFormValues() {
    var str = '';
    var elem = document.getElementById('widgetForm').elements;

    for (var i = 0; i < elem.length; i++) {
        str += "<b>Type: </b>" + elem[i].type + "&nbsp&nbsp";
        str += "<b>Name: </b>" + elem[i].name + "&nbsp;&nbsp;";
        str += "<b>Value: </b><i>" + elem[i].value + "</i>&nbsp;&nbsp;";
        str += "<br>";
    }
    document.getElementById("formElements").innerHTML = str;
}