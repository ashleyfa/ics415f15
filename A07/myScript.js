function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    if (x == null || x == "") {
        alert("username must be filled out");
        document.getElementById("username").select().style.borderColor = "red";
        return false;
    }
    else{
        document.getElementById('username').style.borderColor = "green";
    }
    var y = document.forms["myForm"]["email"].value;
    if(y = null || y == ""){
        alert("email must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["password"].value;
    if(z = null || z == ""){
        alert("password must be filled out");
        return false;
    }
    var w = document.forms["myForm"]["confirm"].value;
    if(w = null || w == ""){
        alert("password must be filled out");
        return false;
    }
    else if((z.localeCompare(w)) == -1){
        alert("password does not match");
        return false;
    }
    return true;
}

function getClasses(elem){

}