function getClasses(elem) {
    var newElem = elem.value.replace(/</g, '');
    var newString = newElem.substring(newElem.indexOf('class'));
    var secondOccur = newString.substring(newString.indexOf("\"")+1);
    var newStringAgain = secondOccur.substring(0, secondOccur.indexOf("\""));
    var classArray = newStringAgain.split(" ");
    document.getElementById("part1_answer").innerHTML = newStringAgain + "<br> Array: [" + classArray + "]";
    return classArray;
}

/*
function getClasses(elem){
    var x = document.getElementsByTagName(elem).className;
    var y = x.split(" ");

    return y;
}*/

function addClass(elem, className) {
    var newElement = elem.value.replace(/</g, '/').replace(/>/g, '/');
    var elemSplit = newElement.split("/");
    var i;
    for (i = 0; i < elemSplit.length; i++) {
        if (elemSplit[i].indexOf('class') >= 0) {
            break;
        }
    }
    if (i == elemSplit.length) {
        var x = elem.value.indexOf('>');
        var txt2 = elem.value.slice(0, x) + " class = \"" + className.value + "\"" + elem.value.slice(x);
        document.getElementById("part2_answer").innerHTML = "added the class '" + className.value + "'  to the HTML Element";
        return txt2;
    }
    else {
        var focusElem = elemSplit[i].substring(elemSplit[i].indexOf('class'));
        var secondOccur = focusElem.substring(focusElem.indexOf("\"") + 1);
        var replaceElem = secondOccur.substring(0, secondOccur.indexOf("\""));
        document.getElementById("part2_answer").innerHTML = "replaced the class '" + replaceElem + "' with " + className.value;
        return elem.value.replace(replaceElem, className.value);
    }
}
/*
function addClass(elem, className){
    var x = document.getElementById(elem);
    if(x.indexOf(x.className) != -1){
        x.className = x.className + className;
    }
    else{
        x.className.replace(x.className, ' ' + className);
    }
}
*/
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
    var password1 = document.getElementById('password').value;
    var password2 = document.getElementById('confirm').value;
    if(password1 == password2) {
        return true;
    }
    else {
        document.getElementById("alert_message").style.display = 'block';
        document.getElementById("pass_error").style.display = 'block';
        return false;
    }
}