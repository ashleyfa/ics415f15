function getClasses(elem) {
    var newelem = elem.value.replace(/</g, '');
    var newString = newelem.substring(newelem.indexOf('class'));
    var secondOccur = newString.substring(newString.indexOf("\"")+1);
    var newStringAgain = secondOccur.substring(0, secondOccur.indexOf("\""));
    var classArray = newStringAgain.split(" ");
    document.getElementById("part1_answer").innerHTML = newStringAgain + "<br> Array: [" + classArray + "]";
    return classArray;
}

function addClass(elem, className){
    var newelem = elem.value.replace(/</g, '');

}

function validateForm() {
    var i, j;
    var w = document.forms["myForm"]["username"].value;
    if (w == null || w == "") {
        document.getElementById('username').style.background = "red";
        i = 1;
    }

    var x = document.forms["myForm"]["email"].value;
    if (x == null || x == "") {
        document.getElementById('email').style.background = "red";
        i = 1;
    }

    var y = document.forms["myForm"]["password"].value;
    if(y == null || y == ""){
        document.getElementById('password').style.background = "red";
        i = 1;
    }

    var z = document.forms["myForm"]["confirm"].value;
    if(z == null || z == ""){
        document.getElementById('confirm').style.background = "red";
        i = 1;
    }

    if(i == 1){
        document.getElementById("alert_message").style.display = 'block';
        document.getElementById("all_error").style.display = 'block';
        j = 2;
    }

    if(checkPass() == false){
        return false;
    }
    else if(j == 2){
        return false;
    }
    else{
       return true;
    }
}


function checkPass() {
    var password1 = $("#password").val();
    var password2 = $("#confirm").val();

    if(password1 == password2) {
        return true;
    }
    else {
        document.getElementById("alert_message").style.display = 'block';
        document.getElementById("pass_error").style.display = 'block';
        return false;
    }

}