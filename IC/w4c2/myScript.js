window.onload = codeAddress;

function AddData(){
    var table = document.getElementById('list');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1.innerHTML = document.getElementById('username').value;
    td2.innerHTML = document.getElementById('address').value;
    td3.innerHTML = document.getElementById('phone').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].appendChild(row);
}


function ResetForm(){
    document.getElementById("myForm").reset();
}

function goBack(){
    window.history.back();
    ResetForm();
}
function changeText(id){
    id.innerHTML = "Hello!";
}

function codeAddress(){
    document.getElementById("demo").innerHTML = window.location.search;
}

function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    if (x == null || x == "") {
        alert("username must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["address"].value;
    if (y == null || y == "") {
        alert("address must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["phone"].value;
    if (isNaN(z)) {
        alert("address must be filled out");
        return false;
    }
}