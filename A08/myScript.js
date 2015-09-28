/**
 * Created by asfagaragan on 9/23/15.
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

$(function(){
    $(".toggle").click(function(){
        $(this).find('i').toggleClass('fa-plus fa-minus');
    });

    $("#button").click(function() {
        $.get(document.getElementById("elem_url").value, function(data){
            var $data = $('<div>').html( data );
            document.getElementById("link_count").innerHTML = "Number of links = " + $data.find('a[href]').length;
        });
    });
});