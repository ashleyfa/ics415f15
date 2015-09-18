function validateForm() {
    var i;
    var x = document.forms["myForm"]["username"].value;
    if (x == null || x == "") {
        document.getElementById('username').style.background = "red";
        alert("username must be filled out");
        return false;
    }

    var y = document.forms["myForm"]["email"].value;
    if (y == null || y == "") {
        document.getElementById('email').style.background = "red";
        alert("email must be filled out");
        return false;
    }

    switch(i){
        case 1:
            alert.getElement
    }

    return true;
}

function getClasses(elem){

}